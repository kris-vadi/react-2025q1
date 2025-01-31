import { Component, ReactNode } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";

class Header extends Component {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <Button>send</Button>
      </header>
    );
  }
}

export default Header;
