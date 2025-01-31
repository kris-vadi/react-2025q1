import { PlanetParams } from "../../types/types";

interface HomePageState {
  items: PlanetParams[];
  searchValue: string | null;
  isLoading: boolean;
}

export default HomePageState;
