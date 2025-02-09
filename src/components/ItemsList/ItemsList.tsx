import styles from "./ItemsList.module.css";
import ItemListProps from "./ItemsList.props";
import Item from "../Item/Item";
import Loader from "../UI/Loader/Loader";

const ItemsList = ({ isLoading, items, error }: ItemListProps) => {
  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (items && items.length > 0) {
      return (
        <div className={styles.list}>
          {items.map((item) => (
            <Item item={item} key={item.created} />
          ))}
        </div>
      );
    }

    if (error !== "") {
      return <p>ERROR: {error}</p>;
    }

    return <p>Sorry, no items match your search...</p>;
  };

  return <div className={styles.list}>{renderContent()}</div>;
};

export default ItemsList;
