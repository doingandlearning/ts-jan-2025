// Step 1: Define the overload signatures for the getValue function

// Your overload signatures here
{{
  type getValue = {
    (value: string): string;
    (value: number): number;
    <T>(value: T[], index: number): T;
  };

  const getValue: getValue = <T>(
		obj: string | number | T[],
		index?: number
	): string | number | T =>  {
		if (typeof obj === "string" || typeof obj === "number") {
			return obj;
		} else if (Array.isArray(obj) && typeof index === "number") {
			return obj[index];
		}
		throw new Error("Can't pass array without index!");
	};
}

function getValue(value: string): string;
function getValue(value: number): number;
function getValue<T>(value: T[], index: number): T;
// Step 2: Implement the getValue function to handle the different cases
function getValue<T>(
  obj: string | number | T[],
  index?: number
): string | number | T {
  if (typeof obj === "string" || typeof obj === "number") {
    return obj;
  } else if (Array.isArray(obj) && typeof index === "number") {
    return obj[index];
  }
  throw new Error("Can't pass array without index!");
}

// Step 3: Test Cases

const strVal = getValue("hello"); // Should return "hello"
const numVal = getValue(42); // Should return 42
const arrVal = getValue([10, 20, 30], 1); // Should return 20

getValue();
