import { Component, ReactNode } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import { BASE_PATH } from "./API/constants";

class App extends Component {
  state = {
    searchValue: "",
    hasError: false,
    items: [],
    isLoading: false,
  };

  componentDidMount(): void {
    this.fetchData(this.state.searchValue);
  }

  fetchData = async (searchValue: string) => {
    this.setState({ isLoading: true });
    const res = await fetch(`${BASE_PATH}=${searchValue}`);
    const data = await res.json();
    this.setState({ items: data.results, isLoading: false });
  };

  throwErrorBoundary = () => {
    this.setState({ hasError: true });
  };

  handleSearch = (newValue: string) => {
    this.setState({
      searchValue: newValue,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error("ErrorBoundary worked!");
    }

    return (
      <>
        <Header onSearch={this.handleSearch} />
        <main className="main">
          <Button onClick={this.throwErrorBoundary}>Throw Error</Button>
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
