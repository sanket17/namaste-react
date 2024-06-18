import { BrowserRouter } from "react-router-dom";
import BodyComponent from "../BodyComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResListDataMock from "../mocks/ResListDataMock.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(ResListDataMock);
    },
  });
});

describe("Body component render", () => {
  function renderComponent() {
    return render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>,
    );
  }

  it("Should render Search Button", async () => {
    await act(async () => renderComponent());
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });

  it("Should render Search Input Box", async () => {
    await act(async () => renderComponent());
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
  });

  it("Should render 20 restaurant card", async () => {
    await act(async () => renderComponent());
    const resCardCount = screen.getAllByTestId("resCard");
    expect(resCardCount.length).toBe(20);
  });

  it("Should render 2 restaurant card when searched for Burger", async () => {
    await act(async () => renderComponent());
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchInput, {
      target: {
        value: "burger",
      },
    });
    fireEvent.click(searchButton);

    const resCardCount = screen.getAllByTestId("resCard");
    expect(resCardCount.length).toBe(1);
  });
});
