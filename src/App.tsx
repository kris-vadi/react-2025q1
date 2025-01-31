import { Component, ReactNode } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    hasError: false,
    searchValue: "",
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
        </main>
      </>
    );
  }
}

export default App;
