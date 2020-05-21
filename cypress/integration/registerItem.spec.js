const testItem = "Laptop";

describe("visit the app, open the formular, register an item and return home", () => {
  it("visits the app", () => {
    cy.visit("/");
    cy.contains("this is my stuff");
  });
  it('clicking the "+" icon navigates to the formular (new URL /form)', () => {
    cy.get("[data-cy=AddButton]").click();
    cy.url().should("include", "/form");
  });
  it("register an item", () => {
    cy.visit("/form");
    cy.get("[data-cy=form]").submit();
    cy.get('input[name="name"]').type(testItem);
    cy.get('textarea[name="description"]').type(
      "Oh nein... Mein Laptop ist sehr wichtig! Bitte melde dich!"
    );
    cy.get('input[name="mail"]').type("laptop@return.de");
    cy.get("[data-cy=submit]").click();
    cy.visit("/");
  });
  it("a new item is added", () => {
    cy.visit("/");
    cy.contains(testItem).should("exist");
  });
});
