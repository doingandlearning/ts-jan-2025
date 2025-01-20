// 7 Primitive Types
// String, Number, Boolean, undefined, null, Symbol, BigInt

// Everything else is an object:
// Object, Function, Array

{
  let location: string = "Belfast";
  let name = "Kevin";

  let age: string | number = 41;

  age = "41";

  let a: null | undefined = null;
  a = undefined;
}

{
  // any, unknown, void,  never
  let name: any = "Kevin";
  name = 1234;

  // implicit any
  let age: unknown = 41;

  function doSomethingWithAge(age: unknown) {
    age;

    if (typeof age === "string") {
      age;
    }
  }

  function noReturn(): void {
    // return 1
  }

  function example(x: string | number) {
    if (typeof x === "string") {
      return x;
    } else if (typeof x === "number") {
      return x;
    }
    x;
    throw new Error("Unhandled variable type");
  }
}

{
  const enum STATUS_CODE {
    "OK" = 200,
    "NOT_FOUND" = 404,
    "UNAUTHORIZED" = 403,
  }

  console.log(STATUS_CODE.OK);
}
