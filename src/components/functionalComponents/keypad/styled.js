import styled from "styled-components";

export const KeypadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 30px 20px 20px;
`;

export const Keys = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5vw;
  grid-row-gap: 3.5vh;
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 21px;
  font-size: 44px;

  background-color: rgba(211, 211, 211, 0.25);
  border: 1px solid gray;
  border-radius: 15px;

  cursor: pointer;
`;
