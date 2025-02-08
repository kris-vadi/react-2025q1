import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import Button from "../Button/Button";

const Search = ({ getSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentValue = event.target.value.trim();

    setInputValue(currentValue);
    if (currentValue === "") {
      localStorage.removeItem("search-input-value");
    } else {
      localStorage.setItem("search-input-value", currentValue);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getSearch(inputValue);
  };

  useEffect(() => {
    const currentValue = localStorage.getItem("search-input-value");
    setInputValue(currentValue || "");
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <Button>Search</Button>
    </form>
  );
};

export default Search;
