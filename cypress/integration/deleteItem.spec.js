const testItem = "Laptop";

describe("visit the app & delete all items", () => {
  it("visits the app & deletes an item", () => {
    cy.visit("/");
    cy.contains(testItem);
  });
  it("clicking the bin-icon deletes one item & rerender the app", () => {
    cy.get("[data-cy=DeleteButton]").click({ multiple: true });
  });
  it("visits the app & deletes an item", () => {
    cy.visit("/");
    cy.get("testItem").should("not.exist");
  });
});
