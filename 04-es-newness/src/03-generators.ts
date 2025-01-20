function* generatorFunction() {
  yield "🍑"; // pauses
  yield "🍉"; // pauses
  yield "🍋"; /// pauses
  yield "🥭"; // pauses
}

const fruitGenerator = generatorFunction();

for (let fruit of fruitGenerator) {
  console.log(fruit);
}

for (let fruit of generatorFunction()) {
  console.log(fruit);
}

function* fibon(): Generator<string> {
  // 1, 1, 2, 3, 5, 8, . . . ..
  let first = 1;
  let second = 2;

  while (true) {
    let sum = second + first;
    yield `The next value is ${sum}`;
    if (sum > 10_000_000_000) {
      console.log("all done");
      return;
    }
    first = second;
    second = sum;
  }
}
const sequence = fibon();

for (let num of sequence) {
  console.log(num);
}
