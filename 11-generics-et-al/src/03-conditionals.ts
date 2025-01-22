//    test ? true_result : false_result
type IsString<T> = T extends string ? true : false;

type A = IsString<"1234">;
type B = IsString<1234>;

type ToDo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoWithRequiredTitleManual = Partial<Todo> &
  Required<Pick<Todo, "title">>;

type PartialWithRequired<
  TargetType,
  K extends keyof TargetType
> = Partial<TargetType> & Required<Pick<TargetType, K>>;

type TodoWithRequiredTitle = PartialWithRequired<ToDo, "title" | "description">;

const todo: TodoWithRequiredTitle = { title: "", description: "" };
