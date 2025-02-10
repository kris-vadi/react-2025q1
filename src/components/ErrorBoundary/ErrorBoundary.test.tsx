import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ErrorBoundary from "./ErrorBoundary";
import { describe, expect, it } from "vitest";

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <div>Test</div>
        </ErrorBoundary>
      </MemoryRouter>,
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
