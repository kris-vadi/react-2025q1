import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { mockProduct } from "../../tests/mocks/product";
import ItemPage from "./ItemPage";

const mockResponse = {
  ok: true,
  statusText: "OK",
  json: async () => mockProduct,
} as Response;
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

describe("tests for the Item Page component", () => {
  it("check that a loading indicator is displayed while fetching data", async () => {
    render(
      <MemoryRouter initialEntries={["/page/1/details/1/"]}>
        <ItemPage />
      </MemoryRouter>,
    );

    await act(async () => {
      await expect(screen.queryByTestId("loader")).not.toBeNull();
    });
  });
});
