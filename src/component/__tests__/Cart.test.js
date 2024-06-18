import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetail from "../Restaurant/RestaurantDetail";
import MOCK_DATA from "../mocks/mockRestaurantDetail.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../../Store/AppStore";
import HeaderComponent from "../HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Check the Restaurant Detail page", () => {
  function renderComponent() {
    return render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeaderComponent />
          <RestaurantDetail />
          <Cart />
        </BrowserRouter>
      </Provider>,
    );
  }

  it("Should render Restuarant Detail Page", async () => {
    await act(async () => renderComponent());
    expect(screen.getByText("Whopper | (8)")).toBeInTheDocument();
  });

  it("Should render 8 menu under Whooper section ", async () => {
    await act(async () => renderComponent());
    const accordianHeader = screen.getByText("Whopper | (8)");
    fireEvent.click(accordianHeader);
    const menuItem = screen.getAllByTestId("menuItem");
    expect(menuItem.length).toBe(8);
  });

  it("Should Add 1 item in cart on click of Add button", async () => {
    await act(async () => renderComponent());
    const accordianHeader = screen.getByText("Whopper | (8)");
    fireEvent.click(accordianHeader);
    const addButton = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addButton[0]);
    const cartText = screen.getByText("(1)");
    expect(cartText).toBeInTheDocument();
  });

  it("Should render No item message in cart", async () => {
    await act(async () => renderComponent());
    const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartButton);
    const message = screen.getByRole("heading", {
      name: "No Items present in Cart!! Please add few.",
    });
    expect(message).toBeInTheDocument();
  });

  it("Should add two items in cart", async () => {
    await act(async () => renderComponent());
    const accordianHeader = screen.getByText("Whopper | (8)");
    fireEvent.click(accordianHeader);
    const addButton = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(addButton[0]);
    fireEvent.click(addButton[1]);
    const cartItem = screen.getAllByTestId("cartItem");
    expect(cartItem.length).toBe(2);
  });

  it("Should have one items in cart after deletion of 2nd item", async () => {
    await act(async () => renderComponent());
    const deleteItemBtns = screen.getAllByTestId("deleteItem");
    fireEvent.click(deleteItemBtns[1]);
    const cartItem = screen.getAllByTestId("cartItem");
    expect(cartItem.length).toBe(1);
  });
});
