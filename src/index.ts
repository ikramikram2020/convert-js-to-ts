import { addTodo, toggleTodo, getTodos } from "./todo";

addTodo("Learn JavaScript");
addTodo("Convert to TypeScript");

console.log("All Todos:", getTodos());

toggleTodo(getTodos()[0].id);

console.log("After toggling:", getTodos());
