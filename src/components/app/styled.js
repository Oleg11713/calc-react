import styled from "styled-components";
import propTypes from "prop-types";

export const AppContainer = styled.div`
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "dark" ? "#4b4a4a" : "white"};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

AppContainer.protoType = {
  theme: propTypes.string,
};

export const Button = styled.button`
  padding: 15px;
  font-size: 18px;

  background-color: rgba(211, 211, 211, 0.25);
  border: 1px solid gray;
  border-radius: 5px;
  text-align: start;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};

  cursor: pointer;
`;

Button.protoType = {
  theme: propTypes.string,
};
