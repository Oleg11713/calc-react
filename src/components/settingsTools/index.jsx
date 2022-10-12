import React from "react";

import { ButtonClearAllHistory, SwitchTheme, ToolsContainer } from "./styled";

const SettingsTools = () => {
  return (
    <ToolsContainer>
      <SwitchTheme>
        <option>Light Theme</option>
        <option>Dart Theme</option>{" "}
      </SwitchTheme>
      <ButtonClearAllHistory>Clear All History</ButtonClearAllHistory>
    </ToolsContainer>
  );
};

export default SettingsTools;
