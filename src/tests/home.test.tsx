import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Restaurant } from "../api";
import List from "../components/List";
import Home from "../pages/home";

import restaurants from "../../cypress/fixtures/restaurants.json";

describe("homepage", () => {
  it("header", () => {
    const { getByTestId, getByText } = render(<Home />);

    const logo = getByTestId("logo-eatery");
    const titleDescription = getByText("Descubra novos sabores");
    const description = getByText("Aqui eu converso com você sobre nossa proposta");
    const search = getByTestId("search");

    expect(logo).toBeInTheDocument();
    expect(titleDescription).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it("list header", () => {
    const { getByTestId, getByText } = render(<Home />);

    const restaurant = getByText("Restaurantes");
    const loading = getByTestId("loading");

    expect(restaurant).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
  });

  it("list", () => {
    const { getByText } = render(
      <Router>
        <List data={(restaurants.data ?? []) as Restaurant[]} loading={false} searchTerm="" />
      </Router>
    );

    const restaurant = getByText("Restaurant 1");
    const noListed = screen.queryByText("Restaurant 11");

    expect(restaurant).toBeInTheDocument();
    expect(noListed).not.toBeInTheDocument();
  });
});
