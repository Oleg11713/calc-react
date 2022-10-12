import styled from "styled-components";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
`;

export const SwitchTheme = styled.select`
  padding: 15px;
  font-size: 18px;

  background-color: rgba(211, 211, 211, 0.25);
  border: 1px solid gray;
  border-radius: 5px;
  text-align: start;

  cursor: pointer;
`;

export const ButtonClearAllHistory = styled.button`
  margin-top: 20px;

  padding: 15px;
  font-size: 18px;

  background-color: rgba(211, 211, 211, 0.25);
  border: 1px solid gray;
  border-radius: 5px;
  text-align: start;

  cursor: pointer;
`;
