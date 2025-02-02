import { Component, ReactNode } from "react";
import styles from "./HomePage.module.css";
import ErrorButton from "../../components/Button/ErrorButton";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import { BASE_PATH } from "../../API/constants";
import HomePageState from "./HomePage.props";

class HomePage extends Component {
  state = {
    items: [],
    searchValue: "",
    isLoading: false,
    error: "",
  };

  componentDidMount(): void {
    const currentValue = localStorage.getItem("search-input-value") || "";
    this.setState({ searchValue: currentValue });
    this.fetchData(currentValue);
  }

  fetchData = async (searchValue: string) => {
    this.setState({ isLoading: true });
    await fetch(`${BASE_PATH}=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ items: data.results, isLoading: false });
        return data;
      })
      .catch((error) => {
        this.setState({ error: error.message, isLoading: false });
      });
  };

  getSearch = (newValue: string) => {
    this.setState({
      searchValue: newValue,
    });
  };

  componentDidUpdate(_: unknown, prevState: HomePageState): void {
    if (this.state.searchValue !== prevState.searchValue) {
      this.fetchData(this.state.searchValue);
    }
  }

  render(): ReactNode {
    return (
      <>
        <Header getSearch={this.getSearch} />
        <main className={styles["main"]}>
          <ErrorButton>Throw Error</ErrorButton>
          <ItemsList
            isLoading={this.state.isLoading}
            items={this.state.items}
            error={this.state.error}
          />
        </main>
      </>
    );
  }
}
export default HomePage;
