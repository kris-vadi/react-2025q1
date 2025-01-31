import { Component, ReactNode } from "react";
import styles from "./Button.module.css";
import ButtonProps from "./Button.props";

class Button extends Component<ButtonProps> {
  render(): ReactNode {
    return (
      <button className={styles["button"]} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
