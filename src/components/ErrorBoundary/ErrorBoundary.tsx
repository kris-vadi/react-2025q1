import { Component, ErrorInfo } from "react";

import styles from "./ErrorBoundary.module.css";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.props";
import Button from "../Button/Button";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };

    this.handleBackBottonClick = this.handleBackBottonClick.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("ErrorBoundary caught error:");
    console.error(error);
    console.error(info);
  }

  handleBackBottonClick() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles["error"]}>
          <h1>Something went wrong: ErrorBoundary worked!</h1>
          <Button onClick={this.handleBackBottonClick}>
            Back to home page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
