import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../../App";

describe("Tests for CardList component", () => {
  it("Verify that the component renders the specified number of cards", async () => {
    render(<App />);

    await waitFor(() => {
      const currentCards = screen.getAllByTestId("item");
      expect(currentCards).toHaveLength(10);
    });
  });

  it("Check that an appropriate message is displayed if no cards are present", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "aaabbbccc" } });

    const element = screen.findByText("Sorry, no items match your search...");
    expect(element).toBeTruthy();
  });
});
