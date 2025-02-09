import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Search from "./Search";

describe("Search component", () => {
  const getSearch = vi.fn();

  it("clicking the Search button saves the entered value to the local storage", () => {
    render(<Search getSearch={getSearch} />);

    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("searchInput"), {
      target: { value: "searchtest" },
    });
    fireEvent.click(screen.getByText(/Search/i));
    expect(getSearch).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem("search-input-value")).toBe("searchtest");
  });

  // it("component retrieves the value from the local storage upon mounting", () => {});
});
