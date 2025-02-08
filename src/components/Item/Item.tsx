import styles from "./Item.module.css";
import ItemProps from "./Item.props";
import { listKeys } from "../../helpers/listKeys";

const Item = ({ item }: ItemProps) => {
  return (
    <div className={styles["item"]}>
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
    </div>
  );
};

export default Item;
