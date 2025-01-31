import { Component, ReactNode } from "react";
import styles from "./ItemsList.module.css";
import ItemListProps from "./ItemsList.props";

class ItemsList extends Component<ItemListProps> {
  renderContent() {
    if (this.props.isLoading) {
      return <div className={styles.loader}></div>;
    }

    if (this.props.items && this.props.items.length > 0) {
      return (
        <div className={styles.list}>
          {this.props.items.map((item) => (
            <div key={crypto.randomUUID()}>{item.name}</div>
          ))}
        </div>
      );
    }

    return <p>Sorry, no items match your search...</p>;
  }

  render(): ReactNode {
    return <div className={styles.list}>{this.renderContent()}</div>;
  }
}

export default ItemsList;
