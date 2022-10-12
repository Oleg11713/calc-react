import styled from "styled-components";
import propTypes from "prop-types";

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryTitle = styled.h2`
  text-align: center;
  font-weight: normal;
`;

export const CalculationsList = styled.div`
  display: flex;
  flex-direction: column;

  max-height: ${(props) => (props.isHistoryHidden ? "100px" : "445px")};
  overflow: ${(props) => (props.isHistoryHidden ? "hidden" : "auto")};
`;

CalculationsList.propTypes = {
  isHistoryHidden: propTypes.bool,
};

export const Calculation = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
`;
