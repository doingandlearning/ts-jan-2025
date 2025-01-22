import { test, expect } from "vitest";
import { add } from "./add";

test("adds numbers correctly", () => {
  // // Arrange  - Given
  // const a = 2;
  // const b = 3;
  // const want = 5;

  // // Act - When
  // const got = add(a, b);
  const result = add(3, 2);
  // Assert - Then
  expect(result).toBe(5);
  expect(result).to.be.equal(5);
});

// Parameterise
const testCases = [
  { a: -1, b: 0, result: -1 },
  { a: 0.3, b: 0.2, result: 0.5 },
  { a: -10, b: -3, result: -13 }, // -10 + -3 = -10 - 3 = -13
  { a: 0, b: 0, result: 0 },
  { a: Number.MAX_SAFE_INTEGER, b: -1, result: Number.MAX_SAFE_INTEGER - 1 },
];

test.each(testCases)("add($a, $b) = $result", ({ a, b, result }) => {
  const sum = add(a, b);
  expect(sum).toEqual(result);
});

for (const { a, b, result } of testCases) {
  test(`add numbers correctly: ${a} + ${b} = ${result}`, () => {
    const result = add(a, b);
    expect(result).toBe(result);
  });
}

// Unhappy paths
test("error if i try to add non-numbers", () => {
  // error happens here!
  expect(() => add(true as any, [] as any)).toThrow();
  expect(() => add(true as any, [] as any)).toThrowError(TypeError);
  expect(() => add(true as any, [] as any)).toThrowErrorMatchingInlineSnapshot(
    `[TypeError: Both parameters should be numbers.]`
  );
  expect(() => add(true as any, [] as any)).toThrowErrorMatchingSnapshot();
});
