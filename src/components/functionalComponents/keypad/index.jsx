import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { KEYS } from "../../../constants/keys";
import { changeDisplay } from "../../../utils/mathOperations";

import { Key, KeypadContainer, Keys } from "./styled";

const Keypad = () => {
  const currentCalculation = useSelector(
    (state) => state.calculator.currentCalculation
  );
  const [currentResult, setCurrentResult] = useState(0);
  const dispatch = useDispatch();

  return (
    <KeypadContainer>
      <Keys>
        {KEYS.map((key) => {
          return (
            <Key
              key={key}
              onClick={() => {
                changeDisplay(
                  key,
                  dispatch,
                  currentResult,
                  currentCalculation,
                  setCurrentResult
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
