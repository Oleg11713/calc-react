import React from "react";
import { connect } from "react-redux";

import {
  Calculation,
  CalculationsList,
  HistoryContainer,
  HistoryTitle,
} from "./styled";

class History extends React.Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryTitle>History</HistoryTitle>
        <CalculationsList isHistoryHidden={this.props.isHistoryHidden}>
          {this.props.history.map((calculation, index) => {
            return <Calculation key={index}>{calculation}</Calculation>;
          })}
        </CalculationsList>
      </HistoryContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isHistoryHidden: state.calculator.isHistoryHidden,
  history: state.calculator.history,
});

export default connect(mapStateToProps)(History);
