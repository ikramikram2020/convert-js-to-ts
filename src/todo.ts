export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todos: Todo[] = [];

export function addTodo(title: string): void {
  todos.push({ id: Date.now(), title, done: false });
}

export function toggleTodo(id: number): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
}

export function getTodos(): Todo[] {
  return todos;
}
