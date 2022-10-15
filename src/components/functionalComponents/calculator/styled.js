import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: flex;
`;

export const MathPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HistoryPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin: 20px;
  max-width: 300px;
  width: 100%;
  
  padding-left: 20px;
  border-left: 2px solid gray;
`;
