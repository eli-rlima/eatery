/// <reference types="cypress" />

describe("eatery", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("home page", () => {
    it("should have content header", () => {
      cy.get('[data-test="logo"]').contains("eatery").should("be.visible");
      cy.get("h1").contains("Descubra novos sabores").should("be.visible");
      cy.get("h3").contains("Aqui eu converso com você sobre nossa proposta").should("be.visible");
      cy.get('[data-testid="search"').should("have.attr", "placeholder", "Encontre um restaurante");
    });

    it("should have restaurants in list", () => {
      cy.get('[data-test="list-title"').contains("Restaurantes").should("be.visible");
      cy.get('[data-testid="card"]').contains("Restaurant 1").should("be.visible");
    });

    it("should search the correct restaurant", () => {
      cy.get('[data-testid="search"').type("25");
      cy.wait(1000);
      cy.get("h2").contains("Resultados").should("be.visible");
      cy.get(".results-title").contains("Resultados para").should("be.visible");
      cy.get("h5").contains("25").should("be.visible");
      cy.get('[data-testid="card"]').contains("Restaurant 25").should("be.visible");
    });

    it("should redirect to details page when clicked on card", () => {
      cy.get('[data-testid="card"]').contains("Restaurant 1").click();
      cy.url().should("eq", "http://localhost:3000/restaurant/1");
    });
  });
});
