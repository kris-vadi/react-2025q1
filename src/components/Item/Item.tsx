import { Component, ReactNode } from "react";
import styles from "./Item.module.css";
import ItemProps from "./Item.props";
import { listKeys } from "../../helpers/listKeys";

class Item extends Component<ItemProps> {
  render(): ReactNode {
    return (
      <div className={styles["item"]} key={this.props.key}>
        {Object.entries(this.props.item).map(
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
  }
}

export default Item;
