export function add(a: number, b: number) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both parameters should be numbers.");
  }
  return a + b;
}
