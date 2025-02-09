import { fireEvent, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { PlanetParams } from "../../types/types";
import Item from "./Item";
import { MemoryRouter } from "react-router-dom";

describe("Item component", () => {
  const key = 1;
  const item: PlanetParams = {
    climate: "Arid",
    created: "2014-12-09T13:50:49.641000Z",
    diameter: "10465",
    name: "Tatooine",
    population: "120000",
    terrain: "Dessert",
    url: "https://swapi.dev/api/planets/1/",
  };

  it("renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <Item item={item} key={key} />
      </MemoryRouter>,
    );

    expect(screen.getByText(item.name)).toBeInTheDocument();
  });

  it("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <MemoryRouter>
        <Item item={item} key={key} />
      </MemoryRouter>,
    );

    const itemCarts = await screen.findByTestId("item");
    if (itemCarts) await fireEvent.click(itemCarts);
    expect(screen.getByText(/Arid/i)).toBeTruthy();
  });
});
