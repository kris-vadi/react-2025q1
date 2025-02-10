import { JSX } from "react";
import styles from "./Pagination.module.css";
import Button from "../Button/Button";
import { PaginationProps } from "./Pagination.props";

const Pagination = ({
  prev,
  next,
  page,
  setPage,
}: PaginationProps): JSX.Element => {
  const handlePageDecrement = () => {
    if (prev) {
      setPage(page - 1);
    }
  };

  function handlePageIncrement() {
    if (next) {
      setPage(page + 1);
    }
  }

  return (
    <div className={styles["pages"]}>
      <Button onClick={handlePageDecrement} disabled={prev === "null"}>
        prev
      </Button>
      <span>{page}</span>
      <Button onClick={handlePageIncrement} disabled={next === "null"}>
        next
      </Button>
    </div>
  );
};

export default Pagination;
