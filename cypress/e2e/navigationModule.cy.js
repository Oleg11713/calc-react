describe("Navigation should work correctly", () => {
  it("all links should navigates to the right paths", () => {
    const pages = {
      '[href="/homeFC"] > .sc-cCjUiG': "homeFC",
      '[href="/homeCC"] > .sc-cCjUiG': "homeCC",
      '[href="/settings"] > .sc-cCjUiG': "settings",
      ".sc-hhOBVt": "homeFC",
    };

    cy.visit("/");

    Object.keys(pages).forEach((page) => {
      cy.get(page).click({ force: true });
      cy.location("pathname").should("eq", `/${pages[page]}`);
      cy.go("back");
    });
  });
});
