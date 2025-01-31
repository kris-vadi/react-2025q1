import { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    );
  }
}

export default App;
