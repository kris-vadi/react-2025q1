import { Component } from "react";
import Button from "./Button";
import { ButtonProps, ErrorButtonState } from "./Button.props";

class ErrorButton extends Component<ButtonProps, ErrorButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.throwErrorBoundary = this.throwErrorBoundary.bind(this);
  }

  throwErrorBoundary = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error("ErrorBoundary worked!");
    }
    return (
      <Button onClick={this.throwErrorBoundary}>{this.props.children}</Button>
    );
  }
}

export default ErrorButton;
