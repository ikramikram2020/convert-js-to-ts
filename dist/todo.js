"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.getTodos = getTodos;
let todos = [];
function addTodo(title) {
    todos.push({ id: Date.now(), title, done: false });
}
function toggleTodo(id) {
    todos = todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo);
}
function getTodos() {
    return todos;
}
//# sourceMappingURL=todo.js.map