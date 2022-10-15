import React from "react";
import { connect } from "react-redux";

import { KEYS } from "../../../constants/keys";
import { changeDisplay } from "../../../utils/mathOperations";

import { Key, KeypadContainer, Keys } from "./styled";

class Keypad extends React.Component {
  constructor(props) {
    super(props);

    this.currentResult = 0;

    this.setCurrentResult = (currentResult) => {
      this.setState({ currentResult: currentResult });
    };
  }

  render() {
    return (
      <KeypadContainer>
        <Keys>
          {KEYS.map((key) => {
            return (
              <Key
                key={key}
                onClick={() => {
                  const { dispatch } = this.props;
                  changeDisplay(
                    key,
                    dispatch,
                    this.currentResult,
                    this.props.currentCalculation,
                    this.setCurrentResult
                  );
                }}
              >
                {key}
              </Key>
            );
          })}
        </Keys>
      </KeypadContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCalculation: state.calculator.currentCalculation,
});

export default connect(mapStateToProps)(Keypad);
