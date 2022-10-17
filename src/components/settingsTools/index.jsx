import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTheme } from "../../store/reducers/appReducer";
import { clearHistory } from "../../store/reducers/calculatorReducer";

import { ButtonClearAllHistory, SwitchTheme, ToolsContainer } from "./styled";

const SettingsTools = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setTheme(event.target.value));
    localStorage.setItem("theme", JSON.stringify(event.target.value));
  };

  const clearAllHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <ToolsContainer>
      <SwitchTheme value={theme} onChange={handleChange} theme={theme}>
        <option value="light" theme={theme}>
          Light Theme
        </option>
        <option value="dark" theme={theme}>
          Dart Theme
        </option>
      </SwitchTheme>
      <ButtonClearAllHistory onClick={clearAllHistory} theme={theme}>
        Clear All History
      </ButtonClearAllHistory>
    </ToolsContainer>
  );
};

export default SettingsTools;
