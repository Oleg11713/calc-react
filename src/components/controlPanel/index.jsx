import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearHistory,
  setIsHistoryHidden,
} from "../../store/reducers/calculatorReducer";

import {
  ButtonClearHistory,
  ButtonHideHistory,
  ControlPanelContainer,
} from "./styled";

const ControlPanel = () => {
  const isHistoryHidden = useSelector(
    (state) => state.calculator.isHistoryHidden
  );
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const changeHistoryVisibility = () => {
    dispatch(setIsHistoryHidden());
  };

  const clearAllHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <ControlPanelContainer>
      <ButtonHideHistory onClick={changeHistoryVisibility} theme={theme}>
        {isHistoryHidden ? "Full History" : "Hide History"}
      </ButtonHideHistory>
      <ButtonClearHistory onClick={clearAllHistory} theme={theme}>
        Clear History
      </ButtonClearHistory>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
