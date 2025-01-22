// Generic

import { log } from "console";

// Generic Functions
// function someFunction<Type>() {}
// // Generic Classes
// class SomeClass()<Type> {}
// // Generic Types
// type SomeType<Type> = {}

// Array<>

// Promise<>

function firstElement<Type, U>(a: Type[], b: U): Type {
  // return 1;
  console.log(b);
  return a[0];
}

const a_s = ["one", "two", "three"];
const a_n = [1, 2, 3];
const a_m = ["one", 2, "three"];

console.log(firstElement(a_s, "a"));
console.log(firstElement(a_n, 2));
console.log(firstElement(a_m, true));

const value = firstElement(a_s, 3);

const arrNumbers: Array<number> = [];

const getSecondItem = <T>(a: T[]) => a[2];

const newValue = getSecondItem(a_m);

function logValue<ValueType>(city: ValueType) {
  console.log(city);
  return city;
}

logValue<number>(123);

function logValues<ValueType1, ValueType2>(
  value1: ValueType1,
  value2: ValueType2
) {
  console.log(value1);
  console.log(value2);
}

type City = {
  name: string;
  country: string;
};

function logCityName<CityType extends City>(city: CityType) {
  console.log(`${city.name} is the capital of ${city.country}`);
  return city;
}

type CapitalCity = City & { population: number; airport: boolean };

const london: CapitalCity = {
  name: "London",
  country: "England",
  population: 10_000_000,
  airport: true,
};

const value2 = logCityName(london);
const nextValue = logCityName({});

type ApiResponse<APIDataType> = {
  statusCode: number;
  statusText: string;
  results?: number;
  data: APIDataType[];
};

type UserAPIType = {
  email: string;
  region: string;
  last_logged_in: Date;
};

type ProgramAPI = {
  episode: number;
  length: number;
  channel: string;
};
const data: ApiResponse<ProgramAPI> = await fetch("");
