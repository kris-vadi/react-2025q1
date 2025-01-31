import { Component, ReactNode } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

class App extends Component {
  state = {
    hasError: false,
  };

  throwErrorBoundary = () => {
    this.setState({ hasError: true });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error("ErrorBoundary worked!");
    }

    return (
      <>
        <Header />
        <main className="main">
          <Button onClick={this.throwErrorBoundary}>Throw Error</Button>
        </main>
      </>
    );
  }
}

export default App;
