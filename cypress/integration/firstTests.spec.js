describe("visit the app", () => {
  it("visits the home page", () => {
    cy.visit("/");

    cy.contains("this is my stuff");
  });

  // it('clicking maps icon navigates to a new url', () => {
  //   cy.visit('/profiles')

  //   cy.get('[data-cy=maps_icon]').click()
  //   cy.url().should('include', '/maps')
  // })

  // it('clicking create icon navigates to a new url', () => {
  //   cy.visit('/profiles')

  //   cy.get('[data-cy=create_icon]').click()
  //   cy.url().should('include', '/create')
  // })
});
// describe("visit the form", () => {
//   it("visits the form url", () => {
//     cy.visit("http://localhost:3000/form");
//   });
