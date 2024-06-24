import {
  GET_RESTAURANT_LIST,
  GET_RESTAURANT_DETAIL,
} from "../../src/Utils/constant";

describe("Landing Page Testing", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", GET_RESTAURANT_LIST, {
      fixture: "../../src/component/mocks/mockResListData.json",
    });
    cy.intercept("GET", GET_RESTAURANT_DETAIL, {
      fixture: "../../src/component/mocks/mockRestaurantDetail.json",
    });
  });

  it("Should render home page", () => {
    cy.get('[data-cy="resCard"]').should("have.length", 20);
  });

  it("Should render Restaurant Detail page on click of first restaurant card", () => {
    const resCard = cy.get('[data-cy="resCard"]');
    resCard.first().click();
    cy.contains("Menu").should("be.visible");
  });

  it("Should add on item to cart", () => {
    const resCard = cy.get('[data-cy="resCard"]');
    resCard.first().click();
    const menuItem = cy.get("li[data-testid='menuItem']");
    menuItem.first().get("[data-cy='addItemButton']").first().click();
    menuItem.first().get("[data-cy='addItemButton']").eq(1).click();
    cy.contains("(2)").should("be.visible");
  });

  it("Should remove first item from cart on click of Delete Item button", () => {
    const resCard = cy.get('[data-cy="resCard"]');
    resCard.first().click();
    const menuItem = cy.get("li[data-testid='menuItem']");
    menuItem.first().get("[data-cy='addItemButton']").first().click();
    menuItem.first().get("[data-cy='addItemButton']").eq(1).click();
    cy.get("[data-cy='cart-image']").click();
    cy.get("button[data-testid='deleteItem']").eq(1).click();
    cy.get("div[data-testid='cartItem']").should("have.length", 1);
  });

  it("Should remove all item from cart on click of Clear Cart button", () => {
    const resCard = cy.get('[data-cy="resCard"]');
    resCard.first().click();
    const menuItem = cy.get("li[data-testid='menuItem']");
    menuItem.first().get("[data-cy='addItemButton']").first().click();
    menuItem.first().get("[data-cy='addItemButton']").eq(1).click();
    cy.get("[data-cy='cart-image']").click();
    cy.contains("Clear Cart").click();
    cy.contains("No Items present in Cart!! Please add few.").should(
      "be.visible",
    );
  });
});
