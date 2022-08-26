context("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("home page", () => {
    it("should have link to react page", () => {
      cy.get("a").contains("Learn React").should("be.visible");
    });
  });
});
