import { renderHook } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import usePizzaOfTheDay from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "A spicy pizza with pepperoni, jalapeños, and red pepper flakes.",
  image: "/public/pizzas/calabrese.webo",
  size: { S: 12.25, M: 16.25, L: 20.25 },
};

test("gives null when first called", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBe(null);
});
