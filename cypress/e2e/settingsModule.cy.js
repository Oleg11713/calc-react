describe("Settings module should work correctly", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("SwitchTheme select field should change theme", () => {
    cy.get(".sc-ezOQGI").should("have.css", "color", "rgb(0, 0, 0)");

    cy.get(".sc-ezOQGI").select("dark");

    cy.get(".sc-ezOQGI").should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("ClearAllHistory should clear all history", () => {
    const history = ["2+2", "3+3"];
    localStorage.setItem("history", JSON.stringify(history));
    expect(JSON.parse(localStorage.getItem("history")).length).to.eq(2);

    cy.get(".sc-jSUZER")
      .click()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("history")).length).to.eq(0);
      });
  });
});
