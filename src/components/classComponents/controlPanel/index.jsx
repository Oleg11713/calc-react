import React from "react";
import { connect } from "react-redux";

import {
  clearHistory,
  setIsHistoryHidden,
} from "../../../store/reducers/calculatorReducer";

import {
  ButtonClearHistory,
  ButtonHideHistory,
  ControlPanelContainer,
} from "./styled";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.changeHistoryVisibility = () => {
      this.props.setIsHistoryHidden();
    };

    this.clearAllHistory = () => {
      this.props.clearHistory();
    };
  }

  render() {
    return (
      <ControlPanelContainer>
        <ButtonHideHistory
          onClick={this.changeHistoryVisibility}
          theme={this.props.theme}
        >
          {this.props.isHistoryHidden ? "Full History" : "Hide History"}
        </ButtonHideHistory>
        <ButtonClearHistory
          onClick={this.clearAllHistory}
          theme={this.props.theme}
        >
          Clear History
        </ButtonClearHistory>
      </ControlPanelContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setIsHistoryHidden: () => dispatch(setIsHistoryHidden()),
  clearHistory: () => dispatch(clearHistory()),
});

const mapStateToProps = (state) => ({
  theme: state.app.theme,
  isHistoryHidden: state.calculator.isHistoryHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
