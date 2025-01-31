import { Component, ReactNode } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import { BASE_PATH } from "./API/constants";
import ErrorButton from "./components/Button/ErrorButton";

class App extends Component {
  state = {
    searchValue: "",
    items: [],
    isLoading: false,
  };

  componentDidMount(): void {
    const currentValue = localStorage.getItem("search-input-value");
    this.setState({ inputValue: currentValue || "" });
    console.log(currentValue);
    console.log(this.state.searchValue);
    this.fetchData(this.state.searchValue);
  }

  fetchData = async (searchValue: string) => {
    this.setState({ isLoading: true });
    const res = await fetch(`${BASE_PATH}=${searchValue}`);
    const data = await res.json();
    this.setState({ items: data.results, isLoading: false });
  };

  handleSearch = (newValue: string) => {
    this.setState({
      searchValue: newValue,
    });
  };

  render(): ReactNode {
    return (
      <>
        <Header onSearch={this.handleSearch} />
        <main className="main">
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

export default App;
