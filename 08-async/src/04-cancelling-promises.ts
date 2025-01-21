// import { setTimeout } from "node:timers/promises";
// Promise.race([
//   fetch("https://api.github.com/users/doingandlearning"),
//   setTimeout(4000, "Too late!"),
// ]).then((result) => console.log(result));

const ac = new AbortController();
async function run() {
  try {
    const response = await fetch(
      "https://api.github.com/users/doingandlearning",
      {
        signal: ac.signal,
      }
    );

    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }
    const result = await response.json();

    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Operation aborted");
      }
    }
  }
}

run();
setTimeout(() => {
  if (Math.random() > 0.5) {
    ac.abort();
  }
}, 1);
