import { PlanetParams } from "../../types/types";

export const mockProduct: PlanetParams = {
  climate: "Arid",
  created: "2014-12-09T13:50:49.641000Z",
  diameter: "10465",
  name: "Tatooine",
  population: "120000",
  terrain: "Dessert",
  url: "https://swapi.dev/api/planets/1/",
};

export const mockProduct_2: PlanetParams = {
  climate: "temperate",
  created: "2014-12-10T17:23:29.896000Z",
  diameter: "9830",
  name: "Dantooine",
  population: "1000",
  terrain: "oceans, savannas, mountains, grasslands",
  url: "https://swapi.dev/api/planets/25/",
};

export const mockSearchProductResponse = {
  results: [mockProduct, mockProduct_2],
  count: 60,
  next: "https://swapi.dev/api/planets/?search=&page=1",
  previous: null,
};

export const mockEmptySearchProductResponse = {
  products: [],
  count: 60,
  next: null,
  previous: null,
};
