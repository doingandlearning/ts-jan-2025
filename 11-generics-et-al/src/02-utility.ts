const promise = async () => 1234;

const result = promise();

type ResolvedResult = Awaited<typeof result>;
type Result = typeof result;

interface Todo {
  title: string;
  description: string;
  id?: number;
  completed: boolean;
}

type FetchedTodo = Required<Todo>;

const unfinishedTodo: Partial<Todo> = {};

// const refetchedTodo: FetchedTodo;

type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<string, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  mog: { age: 4, breed: "Tabby" },
};
