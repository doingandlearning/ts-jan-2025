function ask() {
  return prompt("When is your birthday?") || "";
}

// May not be parse-able!
function parse(birthday) {
  return new Date(birthday);
}

let date = parse(ask());
console.log(`Date is ${date.toISOString()}`);
