import styles from "./Header.module.css";
import Search from "../Search/Search";
import HeaderProps from "./Header.props";

const Header = ({ getSearch }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <Search getSearch={getSearch} />
    </header>
  );
};

export default Header;
