enum ErrorCodes {
  "ERR_API_ISSUE",
  "ERR_BIRTHDAY_DATE_ISSUE",
}

class BBCError extends Error {
  public code: ErrorCodes;
  constructor(message: string, code: ErrorCodes) {
    super(message);
    this.name = "BBCError";
    this.code = code;
  }
}

class BBCError1 extends Error {
  constructor(message: string, public code: ErrorCodes) {
    super(message);
    this.name = "BBCError";
  }
}

const newError = new BBCError(
  "This is an error message",
  ErrorCodes.ERR_BIRTHDAY_DATE_ISSUE
);
console.log(newError.name);
console.log(newError.message);
console.log(newError.stack);
console.log(newError.code);

function parse(birthday: string): Date {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    const error = new BBCError("Please enter date in the form yyyy/mm/dd");

    // error.code = "ERR_DATE_INVALID_FOR_BIRTHDAY";

    throw error;
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

try {
  console.log(`Date is ${date.toISOString()}`);
} catch (error) {
  if (error instanceof BBCError) {
    console.log(error.message);
    // do something else
  } else if (error instanceof Error) {
    console.log("Something unexpected has happened.");
    //
  }
}
