import { ChangeEvent, FormEvent } from "react";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import Button from "../Button/Button";
import useSearchQuery from "../../hooks/useSearchQuery";

const Search = ({ getSearch }: SearchProps) => {
  const [searchQuery, storeSearchQuery] = useSearchQuery();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentValue = event.target.value.trim();

    storeSearchQuery(currentValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getSearch(searchQuery);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        data-testid="searchInput"
      ></input>
      <Button>Search</Button>
    </form>
  );
};

export default Search;
