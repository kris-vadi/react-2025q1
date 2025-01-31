import { Component, ReactNode } from "react";
import styles from "./Header.module.css";

class Header extends Component {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
      </header>
    );
  }
}

export default Header;
