import React from "react";

import {
  Calculation,
  CalculationsList,
  HistoryContainer,
  HistoryTitle,
} from "./styled";

const History = () => {
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <CalculationsList>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
        <Calculation>2*2</Calculation>
      </CalculationsList>
    </HistoryContainer>
  );
};

export default History;
