import styles from "./Item.module.css";
import ItemProps from "./Item.props";
import { listKeys } from "../../helpers/listKeys";
import { Link } from "react-router";
import { getPlanetId } from "../../utils/utils";

const Item = ({ item }: ItemProps) => {
  const id: string = getPlanetId(item.url);
  const newQuery = `details/${id}`;

  return (
    <Link to={newQuery} className={styles["item"]} data-testid="item">
      {Object.entries(item).map(
        ([key, value]) =>
          listKeys.includes(key) && (
            <div key={key}>
              <span className={styles["item-key"]}>
                {key.replace("_", " ")}:{" "}
              </span>
              {value}
            </div>
          ),
      )}
    </Link>
  );
};

export default Item;
