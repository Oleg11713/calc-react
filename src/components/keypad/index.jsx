import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { KEYS } from "../../constants/keys";
import {
  setCurrentCalculation,
  setHistory,
} from "../../store/reducers/calculatorReducer";

import { Key, KeypadContainer, Keys } from "./styled";

const Keypad = () => {
  const currentCalculation = useSelector(
    (state) => state.calculator.currentCalculation
  );
  const dispatch = useDispatch();

  return (
    <KeypadContainer>
      <Keys>
        {KEYS.map((key) => {
          return (
            <Key
              key={key}
              onClick={() => {
                if (key === "CE" || key === "C")
                  dispatch(setCurrentCalculation("0"));
                else if (key === "=") {
                  dispatch(setCurrentCalculation("0"));
                  dispatch(setHistory(currentCalculation));
                } else if (currentCalculation === "0") {
                  dispatch(setCurrentCalculation(key));
                } else
                  dispatch(
                    setCurrentCalculation(currentCalculation + " " + key)
                  );
              }}
            >
              {key}
            </Key>
          );
        })}
      </Keys>
    </KeypadContainer>
  );
};

export default Keypad;
