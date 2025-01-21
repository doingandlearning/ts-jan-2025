// The null problem

const elem = document.getElementById("headline");

elem?.ATTRIBUTE_NODE; // optional chaining
// Can't find attribute ATTRIBUTE_NODE on undefined

elem?.ATTRIBUTE_NODE && elem.ATTRIBUTE_NODE;

if (elem) {
  elem;
} else {
  elem;
}

elem!;

if (!elem) throw new SyntaxError("Element does not exist");

elem;

function contains(text: string, search: string | RegExp): Boolean {
  search;
  if (typeof search === "string") {
    return text.includes(search);
  }
  return Boolean(search.exec(text));
}

function contains2(text: string, search: string | RegExp): Boolean {
  search;
  if (search instanceof RegExp) {
    return Boolean(search.exec(text));
  }
  return text.includes(search);
}

contains("I love porridge", "love");
contains("I love porridge", /love/);

interface Apple {
  isGoodForBaking: boolean;
  ripe: boolean;
}

interface Orange {
  numOfSegments: number;
  ripe: boolean;
}

function pickFruit(fruit: Apple | Orange) {
  if ("isGoodForBaking" in fruit) {
    return fruit;
  } else {
    return fruit;
  }
  fruit;
}

interface Events {
  type: "upload" | "download";
}

interface UploadEvent extends Events {
  type: "upload";
  filename: string;
  contents: Blob;
}

interface DownloadEvent extends Events {
  type: "download";
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function isUploadEvent(e: AppEvent): e is UploadEvent {
  return e instanceof Object && "contents" in e;
}

function isDownloadEvent(e: AppEvent): e is DownloadEvent {
  return e instanceof Object && "contents" in e; // TypeScript won't check that you're right!
}

function handleEvent(e: AppEvent) {
  if (isUploadEvent(e)) {
    e;
  } else {
    e;
  }

  if (isDownloadEvent(e)) {
    e;
  } else {
    e;
  }

  switch (e.type) {
    case "download":
      e;
      break;
    case "upload":
      e;
      break;
    default:
      e;
  }
}

type Todo = {
  status: true | false | "completed" | "pending" | "deleted";
};

function isTodo(obj: any): obj is Todo {
  return (
    typeof obj.status === "boolean" ||
    ["completed", "pending", "deleted"].includes(obj.status)
  );
}

function parseTodos(data: any): Todo[] {
  if (!Array.isArray(data.todos)) {
    throw new Error("Invalid data format");
  }
  return data.todos.filter(isTodo); // Keep only valid Todo items
}

// Example usage:
const todos = parseTodos(data);
