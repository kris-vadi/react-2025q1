import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  const setPage = vi.fn();

  it("renders pagination buttons and current page correctly", () => {
    render(
      <Pagination
        page={1}
        next={"https://swapi.dev/api/planets/?search=&page=2"}
        setPage={setPage}
        prev={null}
      />,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.getByText("prev")).toBeInTheDocument();
    expect(screen.getByText("next")).toBeInTheDocument();
  });
});
