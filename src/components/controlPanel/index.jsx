import React from "react";

import {
  ButtonClearHistory,
  ButtonHideHistory,
  ControlPanelContainer,
} from "./styled";

const ControlPanel = () => {
  return (
    <ControlPanelContainer>
      <ButtonHideHistory>Hide History</ButtonHideHistory>
      <ButtonClearHistory>Clear History</ButtonClearHistory>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
