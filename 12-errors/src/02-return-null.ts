function ask() {
  return prompt("When is your birthday?") || "";
}

function parse(birthday: string): Date | null {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

let date = parse(ask());

if (date) {
  console.log(`Date is ${date.toISOString()}`);
}

export {};
