export type PlanetParams = {
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
  created: string;
  url: string;
};

export type ResponseParams = {
  count: number;
  results: PlanetParams[];
  next: string | null;
  previous: string | null;
};
