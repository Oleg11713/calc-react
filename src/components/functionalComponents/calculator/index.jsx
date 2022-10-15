import React from "react";

import Display from "../display";
import Keypad from "../keypad";
import ControlPanel from "../controlPanel";
import History from "../history";

import { CalculatorContainer, HistoryPart, MathPart } from "./styled";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <MathPart>
        <Display />
        <Keypad />
      </MathPart>
      <HistoryPart>
        <History />
        <ControlPanel />
      </HistoryPart>
    </CalculatorContainer>
  );
};

export default Calculator;
