describe("Should test header component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should render header component", () => {
    // cy.visit("/");
    cy.contains("About Us").should("be.visible");
    cy.contains("Contact").should("be.visible");
    cy.contains("(0)").should("be.visible");
  });

  it("Should toggle click of Login/Logout button", () => {
    // cy.visit("/");
    const button = cy.get("[data-cy='loginButton']");
    button.contains("Login").should("be.visible");
    button.click();
    button.contains("Logout").should("be.visible");
    button.click();
  });

  it("Should render About us page on clicking About Us", () => {
    cy.contains("About Us").click();
    cy.contains("Sanket Tikam").should("be.visible");
  });

  it("Should render Contact Us page on clicking link", () => {
    cy.contains("Contact").click();
    cy.contains("ContactUs").should("be.visible");
    cy.get("input[name='name']").type("Sanket");
    cy.get("input[name='lastname']").type("Tikam");
  });

  it("Should render Cart Page on click cart Image", () => {
    cy.get("[data-cy='cart-image']").click();
    cy.contains("Cart").should("be.visible");
    cy.contains("No Items present in Cart!! Please add few.").should(
      "be.visible",
    );
  });
});
