import styles from "./Button.module.css";
import ButtonProps from "./Button.props";

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={styles["button"]} {...props}>
      {children}
    </button>
  );
};

export default Button;
