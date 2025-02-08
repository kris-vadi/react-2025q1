import { useState } from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.props";

const ErrorButton = ({ children }: ButtonProps) => {
  const [error, setError] = useState<boolean>(false);

  const throwErrorBoundary = () => {
    setError(true);
  };

  if (error) {
    throw new Error("ErrorBoundary worked!");
  }

  return <Button onClick={throwErrorBoundary}>{children}</Button>;
};

export default ErrorButton;
