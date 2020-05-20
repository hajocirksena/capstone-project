describe("visit the app & open the formular", () => {
  it("visits the home page", () => {
    cy.visit("/");
    cy.contains("this is my stuff");
  });
  it('clicking the "+" icon navigates to the formular (new URL /form)', () => {
    cy.get("button").click();
    cy.url().should("include", "/form");
  });
});
