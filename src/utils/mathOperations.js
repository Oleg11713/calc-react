import {
  setCurrentCalculation,
  setHistory,
} from "../store/reducers/calculatorReducer";
import { calculatorCore, operations } from "./commandPattern";

export const changeDisplay = (
  key,
  dispatch,
  currentResult,
  currentCalculation,
  setCurrentResult
) => {
  if (key === "CE" || key === "C") dispatch(setCurrentCalculation("0"));
  else if (key === "=") {
    if (currentCalculation !== "0")
      if (
        getReversePolishNotationString(currentCalculation, setCurrentResult) !==
        "ERROR"
      ) {
        dispatch(setHistory(currentCalculation));
        if (localStorage.getItem("history")) {
          localStorage.setItem(
            "history",
            JSON.stringify(
              JSON.parse(localStorage.getItem("history")).concat([
                currentCalculation,
              ])
            )
          );
        }
      }
    dispatch(
      setCurrentCalculation(
        getReversePolishNotationString(currentCalculation, setCurrentResult)
      )
    );
  } else if (
    (currentCalculation === "0" &&
      key !== "+" &&
      key !== "-" &&
      key !== "*" &&
      key !== "/") ||
    (currentCalculation === currentResult &&
      key !== "+" &&
      key !== "-" &&
      key !== "*" &&
      key !== "/") ||
    currentCalculation === "ERROR"
  ) {
    dispatch(setCurrentCalculation(key));
  } else dispatch(setCurrentCalculation(currentCalculation + "" + key));
};

const getReversePolishNotationString = (str, setCurrentResult) => {
  const op = { "+": 0, "-": 0, "*": 1, "/": 1 };
  let [opStack, exprStack] = [[], []];

  let tmpStr = str.match(/[\d.]+|[^\s]/g);
  let arrayOfStrings = [];

  let startIndex = 1;
  if (tmpStr[0] === "-") {
    arrayOfStrings.push(tmpStr[0] + tmpStr[1]);
    startIndex = 2;
  } else {
    arrayOfStrings.push(tmpStr[0]);
  }
  for (let index = startIndex; index < tmpStr.length; index++) {
    if (tmpStr[index] === "-" && isNaN(tmpStr[index - 1])) {
      arrayOfStrings.push("-" + tmpStr[index + 1]);
    } else if (!(tmpStr[index - 1] === "-" && isNaN(tmpStr[index - 2]))) {
      arrayOfStrings.push(tmpStr[index]);
    }
  }

  for (const e of arrayOfStrings) {
    if (/\d+/.test(e)) {
      exprStack.push(e);
    } else if (e === ")") {
      while (opStack[opStack.length - 1] !== "(") exprStack.push(opStack.pop());
      opStack.pop();
    } else if (!opStack.length) {
      opStack.push(e);
    } else if (op[e] <= op[opStack[opStack.length - 1]]) {
      while (op[e] <= op[opStack[opStack.length - 1]])
        exprStack.push(opStack.pop());
      opStack.push(e);
    } else {
      opStack.push(e);
    }
  }
  while (opStack.length) exprStack.push(opStack.pop());
  let result = exprStack.join` `;
  return calculation(result, setCurrentResult);
};

const calculation = (expression, setCurrentResult) => {
  let exprQueue = expression.split(" ");
  let stack = [];
  let calculator = calculatorCore();

  if (exprQueue === "") {
    return 0;
  }
  for (let i = 0; i < exprQueue.length; i++) {
    if (!isNaN(exprQueue[i]) && isFinite(exprQueue[i])) {
      stack.push(exprQueue[i]);
    } else {
      stack.push(
        calculator.execute(
          operations(
            parseFloat(stack.pop()),
            parseFloat(stack.pop()),
            exprQueue[i]
          )
        )
      );
    }
  }
  if (stack.length > 1 || isNaN(stack[0])) {
    return "ERROR";
  } else {
    setCurrentResult(Math.floor(stack[0] * 1000) / 1000);
    return Math.floor(stack[0] * 1000) / 1000;
  }
};
