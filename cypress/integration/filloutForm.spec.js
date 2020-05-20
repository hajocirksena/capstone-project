const testItem = "Laptop";

describe("visit the form & fill it out", () => {
  it("visits the form", () => {
    cy.visit("/form");
    cy.get("[data-cy=form]").submit();
    cy.get('input[name="name"]').type(testItem);
    cy.get('textarea[name="description"]').type(
      "Oh nein... Mein Laptop ist sehr wichtig! Bitte melde dich!"
    );
    cy.get('input[name="mail"]').type("laptop@return.de");
    cy.get("[data-cy=submit]").click();

    cy.get('input[name="name"]').should("have.value", "");
    cy.get('textarea[name="description"]').should("have.value", "");
    cy.get('input[name="mail"]').should("have.value", "");
  });
  it("a new item is added", () => {
    cy.visit("/");
    cy.contains(testItem).should("exist");
  });
});
