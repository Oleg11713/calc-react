import styled from "styled-components";

import { Button } from "../../app/styled";

export const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonClearHistory = styled(Button)`
  max-width: 140px;
  width: 100%;

  padding: 10px;
  text-align: center;

  border-radius: 30px;
`;

export const ButtonHideHistory = styled(Button)`
  max-width: 140px;
  width: 100%;

  padding: 10px;
  text-align: center;

  border-radius: 30px;
`;
