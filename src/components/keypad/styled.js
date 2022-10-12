import styled from "styled-components";

export const KeypadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 30px 20px 20px;
`;

export const Keys = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 7vw;
  grid-row-gap: 4vh;
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  font-size: 40px;

  background-color: rgba(211, 211, 211, 0.25);
  border: 1px solid gray;
  border-radius: 15px;

  cursor: pointer;
`;
