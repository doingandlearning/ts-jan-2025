// Gulp

type CallbackFn = () => void;

/** Call a task with it's dependencies - they should be strings */
function task(name: string, dependencies: string[]): void;
function task(name: string, dependencies: string[], callback: CallbackFn): void;
function task(name: string, callback: CallbackFn): void;
function task(name: string, arg2: string[] | CallbackFn, arg3?: CallbackFn) {
  if (Array.isArray(arg2)) {
  } else {
    arg2();
  }
}

console.log("Hello");

task("default", ["styles", "scripts"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

task(
  "disallows",
  () => {},
  () => {}
);

task();

document.createEvent();

interface Task {}
