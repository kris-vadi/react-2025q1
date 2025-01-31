import { Component, ReactNode } from "react";
import styles from "./Header.module.css";
import Search from "../Search/Search";
import HeaderProps from "./Header.props";

class Header extends Component<HeaderProps> {
  render(): ReactNode {
    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}

export default Header;
