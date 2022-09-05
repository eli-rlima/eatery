import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import restaurants from "../../cypress/fixtures/restaurants.json";
import Body from "../pages/details/Body";
import Header from "../pages/details/Header";

const restaurant = (restaurants.data ?? [])[0];

describe("details", () => {
  it("header", () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Header restaurant={restaurant} />
      </Router>
    );

    const logo = getByTestId("logo-restaurant");
    const restaurantName = getByText("Restaurant 1");
    const restaurantPhone = getByText("(11) 4382-9385");

    expect(logo).toBeInTheDocument();
    expect(restaurantName).toBeInTheDocument();
    expect(restaurantPhone).toBeInTheDocument();
  });

  it("body", () => {
    const { getByText } = render(
      <Router>
        <Body restaurant={restaurant} />
      </Router>
    );

    const descriptionTitle = getByText("Descrição");
    const description = getByText(restaurant.description);

    const priceRangeTitle = getByText("Faixa de preço");
    const priceRange = getByText(restaurant.price_range);

    const openingHoursTitle = getByText("Horários de funcionamento");
    const openingHours = getByText(restaurant.opening_hours);

    const paymentMethodsTitle = getByText("Formas de pagamento");
    const paymentMethods = getByText(restaurant.payment_methods);

    expect(descriptionTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(priceRangeTitle).toBeInTheDocument();
    expect(priceRange).toBeInTheDocument();
    expect(openingHoursTitle).toBeInTheDocument();
    expect(openingHours).toBeInTheDocument();
    expect(paymentMethodsTitle).toBeInTheDocument();
    expect(paymentMethods).toBeInTheDocument();
  });
});
