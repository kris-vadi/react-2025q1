import { ChangeEvent, Component, FormEvent } from "react";
import styles from "./Search.module.css";
import { SearchProps, SearchState } from "./Search.props";
import Button from "../Button/Button";

export class Search extends Component<SearchProps> {
  state: SearchState = {
    inputValue: "",
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentValue = event.target.value.trim();

    this.setState({
      inputValue: currentValue,
    });
    if (currentValue === "") {
      localStorage.removeItem("search-input-value");
    } else {
      localStorage.setItem("search-input-value", currentValue);
    }
  };

  handleSearch = () => {
    this.props.onSearch(this.state.inputValue.trim());
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue.trim());
  };

  componentDidMount() {
    const currentValue = localStorage.getItem("search-input-value");
    this.setState({ inputValue: currentValue || "" });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <Button onClick={this.handleSearch}>Search</Button>
      </form>
    );
  }
}

export default Search;
