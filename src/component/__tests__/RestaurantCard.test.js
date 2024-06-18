import { render, screen } from "@testing-library/react";
import RestaurantCardComponent from "../RestaurantCardComponent";
import RestaurantCardMockData from "../mocks/RestaurantCardMockData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import withPromtedRestaurantCard from "../Restaurant/PromotedRestaurantCard";

it("Should render Restaurant Card Component", () => {
  render(
    <BrowserRouter>
      <RestaurantCardComponent
        key={RestaurantCardMockData.id}
        data={RestaurantCardMockData}
      />
    </BrowserRouter>,
  );
  const resName = screen.getByText("Chinese Wok");
  expect(resName).toBeInTheDocument();
});

it("Should render Promoted Restaurant Card", () => {
  const promotedMockData = { ...RestaurantCardMockData, avgRating: 4.5 };
  const PromotedCardComponent = withPromtedRestaurantCard(
    RestaurantCardComponent,
  );

  render(
    <BrowserRouter>
      <PromotedCardComponent
        key={promotedMockData.id}
        data={promotedMockData}
      />
    </BrowserRouter>,
  );

  const topRated = screen.getByText("Top Rated");
  expect(topRated).toBeInTheDocument();
});
