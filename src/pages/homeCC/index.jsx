import React from "react";

import Calculator from "../../components/classComponents/calculator";

import { HomeContainer } from "./styled";

class HomePageCC extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Calculator />
      </HomeContainer>
    );
  }
}

export default HomePageCC;
