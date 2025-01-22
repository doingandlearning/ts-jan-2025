function ask() {
  return prompt("When is your birthday?") || "";
}

Error();
SyntaxError();
EvalError();
URIError();
TypeError();
RangeError();
ReferenceError();

function parse(birthday: string): Date {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    throw new RangeError("Please enter date in the form yyyy/mm/dd");
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

let date = parse(ask());

const testError = new Error();

try {
  console.log(`Date is ${date.toISOString()}`);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(error.message);
    // do something else
  } else if (error instanceof Error) {
    console.log("Something unexpected has happened.");
    //
  }
}

export {};
