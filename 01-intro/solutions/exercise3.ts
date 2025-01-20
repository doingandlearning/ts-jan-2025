let numberDict: { [key: string]: number } = {
  key1: 10,
  key2: 20,
};

function sumValues(dict: { [key: string]: number }): number {
  return Object.values(dict).reduce((sum, curr) => sum + curr, 0);
}

console.log(sumValues(numberDict));

// type Regions = "SE" | "NE" | "Scotland";

// const regions: {
//   [regionKey: string]: { captial: string; population: number };
// } = {
//   SE: "London",
//   NE: "Salford",
//   Scotland: "Glasgow",
// };

// const fixedRegions: Record<Regions, string> = {
//   SE: "London",
// };
