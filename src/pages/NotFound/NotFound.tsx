import styles from "./NotFound.module.css";

const NotFound = (): JSX.Element => {
  return (
    <div className={styles["contaner"]}>
      <h1>404</h1>
      Страница не найдена
    </div>
  );
};

export default NotFound;
