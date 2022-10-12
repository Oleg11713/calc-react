import React from "react";

import { KEYS } from "../../constants/keys";

import { Key, KeypadContainer, Keys } from "./styled";

const Keypad = () => {
  return (
    <KeypadContainer>
      <Keys>
        {KEYS.map((key) => {
          return <Key key={key}>{key}</Key>;
        })}
      </Keys>
    </KeypadContainer>
  );
};

export default Keypad;
