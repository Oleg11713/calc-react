describe("Display and keypad modules should work correctly", () => {
  it("display should display what user enters on the keypad", () => {
    cy.visit("/");

    cy.get(".sc-bcXHqe").contains("0");

    cy.get(".sc-dkrFOg > :nth-child(4)").click();
    cy.get(".sc-dkrFOg > :nth-child(5)").click();
    cy.get(".sc-dkrFOg > :nth-child(8)").click();
    cy.get(".sc-dkrFOg > :nth-child(6)").click();
    cy.get(".sc-dkrFOg > :nth-child(7)").click();

    cy.get(".sc-bcXHqe").contains("9*5-4");

    cy.get(".sc-dkrFOg > :nth-child(15)").click();

    cy.get(".sc-bcXHqe").contains("41");
  });
});
