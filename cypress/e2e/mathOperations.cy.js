import {
  calculation,
  getReversePolishNotationString,
} from "../../src/utils/mathOperations";

describe("Math operations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(`should return correct answer when passing the 
  expression as a Reverse Polish notification string`, () => {
    let currentResult = 0;
    const setCurrentResult = (result) => {
      currentResult = result;
    };

    cy.wrap({ foo: getReversePolishNotationString })
      .invoke("foo", "1+2", setCurrentResult)
      .should("eq", 3);

    cy.wrap({ foo: getReversePolishNotationString })
      .invoke("foo", "1+2*5-2*(3+4)", setCurrentResult)
      .should("eq", -3);
  });

  it(`should return correct answer when passing the 
  expression as a regular string`, () => {
    let currentResult = 0;
    const setCurrentResult = (result) => {
      currentResult = result;
    };

    cy.wrap({ foo: calculation })
      .invoke("foo", "1 2 +", setCurrentResult)
      .should("eq", 3);
  });
});
