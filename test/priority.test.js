import { describe, it, expect } from "vitest";
import { calculatePriority } from "../src/priority.js";

describe("calculatePriority", () => {
  it("calculates priority score", () => {
    const result = calculatePriority(2, 3, 60);

    expect(result).toBeCloseTo(2.1633, 3);
  });

  it("handles zero effort", () => {
    const result = calculatePriority(2, 3, 0);

    expect(result).toBeCloseTo(2.95, 2);
  });

  it("calculates the maximum priority score", () => {
    const result = calculatePriority(5, 5, 1);

    expect(result).toBeCloseTo(5, 2);
  });

  it("handles negative effort", () => {
    const result = calculatePriority(2, 3, -3);

    expect(result).toBeCloseTo(2.95, 2);
  });
});
