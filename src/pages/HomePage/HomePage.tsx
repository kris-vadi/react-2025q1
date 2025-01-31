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
  };

  componentDidMount(): void {
    const currentValue = localStorage.getItem("search-input-value");
    this.setState({ inputValue: currentValue || "" });
    this.fetchData(this.state.searchValue);
  }

  fetchData = async (searchValue: string) => {
    this.setState({ isLoading: true });
    const res = await fetch(`${BASE_PATH}=${searchValue}`);
    const data = await res.json();
    console.log(data.results);
    console.log(searchValue);
    this.setState({ items: data.results, isLoading: false });
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
          />
        </main>
      </>
    );
  }
}
export default HomePage;
