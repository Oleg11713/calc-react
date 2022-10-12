import React from "react";
import { useSelector } from "react-redux";

import {
  Calculation,
  CalculationsList,
  HistoryContainer,
  HistoryTitle,
} from "./styled";

const History = () => {
  const history = useSelector((state) => state.calculator.history);
  const isHistoryHidden = useSelector(
    (state) => state.calculator.isHistoryHidden
  );

  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <CalculationsList isHistoryHidden={isHistoryHidden}>
        {history.map((calculation, index) => {
          return <Calculation key={index}>{calculation}</Calculation>;
        })}
      </CalculationsList>
    </HistoryContainer>
  );
};

export default History;
