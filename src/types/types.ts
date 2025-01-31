export type PlanetParams = {
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
};

export type ResponseParams = {
  count: number;
  results: PlanetParams[];
};
