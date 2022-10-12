import styled from "styled-components";

import { Button } from "../app/styled";

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
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};

  cursor: pointer;

  & > option {
    color: black;
  }
`;

export const ButtonClearAllHistory = styled(Button)`
  margin-top: 20px;
`;
