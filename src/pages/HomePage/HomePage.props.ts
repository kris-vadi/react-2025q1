import { PlanetParams } from "../../types/types";

interface HomePageState {
  items: PlanetParams[];
  searchValue: string | null;
  isLoading: boolean;
  error: string;
  next: string | null;
  prev: string | null;
  count: number;
}

export default HomePageState;
