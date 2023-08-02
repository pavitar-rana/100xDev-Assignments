interface Todo {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

type updateTodoInput = Partial<Todo>;

function updateTodo(id: number, newPrpo: updateTodoInput) {}

function swapFunction<T, A>(a: T, b: A): [A, T] {
  return [b, a];
}
const ans = swapFunction(true, "a");
const ans1 = swapFunction(true, 1);
console.log(ans);
