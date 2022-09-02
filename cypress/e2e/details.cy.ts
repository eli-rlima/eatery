/// <reference types="cypress" />

describe("App", () => {
  before(() => {
    cy.visit("http://localhost:3000/restaurant/1");
  });

  context("home page", () => {
    it("should have content header", () => {
      cy.wait(500);
      cy.get(".logo").should("be.visible");
      cy.get('[data-test="restaurant-name"]').contains("Restaurant 1").should("be.visible");
      cy.get("h6").contains("(11) 4382-9385").should("be.visible");
      cy.get("h6").contains("http://www.restaurant1.com.br").should("be.visible");
    });

    it("should have description restaurant", () => {
      cy.get("h6").contains("Descrição").should("be.visible");
      cy.get(".description").should("be.visible");

      cy.get("h6").contains("Faixa de preço").should("be.visible");
      cy.get(".info").contains("De R$ 40,00 a R$ 70,00 por pessoa.").should("be.visible");

      cy.get(".separator").should("be.visible");

      cy.get("h6").contains("Horários de funcionamento").should("be.visible");
      cy.get(".info").contains("De terça à domingo, das 17:00 ãs 23:00.").should("be.visible");

      cy.get("h6").contains("Formas de pagamento").should("be.visible");
      cy.get(".info").contains("Dinheiro, cartão de crédito e débito").should("be.visible");
    });

    it("should redirect to details page when clicked on card", () => {
      cy.wait(500);
      cy.get('[data-test="link-back"]').click();
      cy.url().should("eq", "http://localhost:3000/");
    });
  });
});
