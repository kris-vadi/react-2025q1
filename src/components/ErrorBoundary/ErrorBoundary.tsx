import { Component, ErrorInfo } from "react";

import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.props";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("ErrorBoundary caught error:");
    console.error(error);
    console.error(info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBlock />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
