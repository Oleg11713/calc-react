describe("History module should work correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("HideHistory button should hide history", () => {
    cy.get(".sc-ftTHYK").contains("Hide History");
    cy.get(".sc-kDvujY").should("have.css", "max-height", "445px");

    cy.get(".sc-ftTHYK").click();

    cy.get(".sc-ftTHYK").contains("Full History");
    cy.get(".sc-kDvujY").should("have.css", "max-height", "100px");
  });

  it("ClearHistory button should clear history", () => {
    const history = ["2+2", "3+3"];
    localStorage.setItem("history", JSON.stringify(history));
    expect(JSON.parse(localStorage.getItem("history")).length).to.eq(2);

    cy.get(".sc-iBYQkv")
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("history")).length).to.eq(0);
      });
  });
});
