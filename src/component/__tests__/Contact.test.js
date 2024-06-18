import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Rendering Contact us page", () => {
  function renderComponent() {
    return render(<ContactUs />);
  }

  it("Should render the heading element", () => {
    renderComponent();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should render two input element", () => {
    renderComponent();

    const element = screen.getAllByRole("textbox");
    expect(element.length).toBe(2);
  });

  it("Should render submit button", () => {
    renderComponent();

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});
