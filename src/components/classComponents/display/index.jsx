import React from "react";
import { connect } from "react-redux";

import { DisplayContainer } from "./styled";

class Display extends React.Component {
  render() {
    return <DisplayContainer>{this.props.currentCalculation}</DisplayContainer>;
  }
}

const mapStateToProps = (state) => ({
  currentCalculation: state.calculator.currentCalculation,
});

export default connect(mapStateToProps)(Display);
