import React from "react";
import { useSelector } from "react-redux";

import { DisplayContainer } from "./styled";

const Display = () => {
  const currentCalculation = useSelector(
    (state) => state.calculator.currentCalculation
  );

  return <DisplayContainer>{currentCalculation}</DisplayContainer>;
};

export default Display;
