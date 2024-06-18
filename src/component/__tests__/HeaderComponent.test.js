import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../Store/AppStore";
import "@testing-library/jest-dom";

describe("Header Compoentn Test case", () => {
  function renderComponent() {
    return render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>,
    );
  }

  it("Should render Header component", () => {
    renderComponent();
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render the cart", () => {
    renderComponent();
    const cartText = screen.getByText("(0)");
    expect(cartText).toBeInTheDocument();
  });

  it("Should render logout button on click of login button and reverse", () => {
    renderComponent();
    const button = screen.getByRole("button", { name: "Login" });
    fireEvent.click(button);
    const logoutText = screen.getByText("Logout");
    expect(logoutText).toBeInTheDocument();
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);
    const loginText = screen.getByText("Login");
    expect(loginText).toBeInTheDocument();
  });
});
