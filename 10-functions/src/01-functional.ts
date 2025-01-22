// Haskell

// Declarative
// Imperative
// Object Oriented
// Functional Programming

// useEffect

// 1. Immutability and pure functions (purity)

// input -> output
// no side effects

function isValidEmail(email: string): boolean {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

console.log(String(isValidEmail("kevin@kevincunningham.co.uk")));

// 2. Higher Order Functions
// - one or more of the arguments of the function is a function
// - it returns a function

const userArray = [
  { name: "Boaz", id: 1 },
  { name: "Matt", id: 2 },
  { name: "Roppashree", id: 3 },
];

console.log(userArray);
// console.log(userArray.map((person) => person.name.toUpperCase()));
// console.log(userArray.toReversed());
console.log(
  userArray.toSorted((a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  })
);
console.log(userArray);

// 3. Composability

const result = userArray
  .filter((item) => item.name.includes("a"))
  .map<string>((item) => item.name.toUpperCase());

console.log(result);

// Testability
// Reusability
// Maintainability
