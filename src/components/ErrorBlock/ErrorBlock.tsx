import { Link } from "react-router";
import styles from "./ErrorBlock.module.css";

const ErrorBlock = (): JSX.Element => {
  return (
    <div className={styles["error"]}>
      <h1>Something went wrong: ErrorBoundary worked!</h1>
      <Link to="/" className={styles["link"]}>
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorBlock;
