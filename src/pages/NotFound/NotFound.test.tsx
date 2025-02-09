import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "./NotFound";

describe("404 Not Found component", () => {
  it("is displayed when navigating to an invalid route", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <NotFound />
      </MemoryRouter>,
    );

    expect(screen.getByText("Страница не найдена")).toBeInTheDocument();
  });
});
