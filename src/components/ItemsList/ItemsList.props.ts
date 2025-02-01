import { PlanetParams } from "../../types/types";

interface ItemListProps {
  isLoading: boolean;
  items: PlanetParams[];
  error: string;
}

export default ItemListProps;
