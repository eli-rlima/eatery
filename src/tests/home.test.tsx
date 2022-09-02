import { render } from "@testing-library/react";
import Home from "../pages/home";

describe("homepage", () => {
  it("header", () => {
    const { getByTestId, getByText } = render(<Home />);

    const logo = getByTestId("logo");
    const titleDescription = getByText("Descubra novos sabores");
    const description = getByText("Aqui eu converso com você sobre nossa proposta");
    const search = getByTestId("search");

    expect(logo).toBeInTheDocument();
    expect(titleDescription).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it("list", () => {
    const { getByTestId, getByText } = render(<Home />);

    const restaurant = getByText("Restaurantes");
    const loading = getByTestId("loading");

    expect(restaurant).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
  });
});
