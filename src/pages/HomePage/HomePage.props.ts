import { PlanetParams } from "../../types/types";

interface HomePageState {
  items: PlanetParams[];
  searchValue: string | null;
  isLoading: boolean;
  error: string;
}

export default HomePageState;
