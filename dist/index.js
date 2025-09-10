"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
(0, todo_1.addTodo)("Learn JavaScript");
(0, todo_1.addTodo)("Convert to TypeScript");
console.log("All Todos:", (0, todo_1.getTodos)());
(0, todo_1.toggleTodo)((0, todo_1.getTodos)()[0].id);
console.log("After toggling:", (0, todo_1.getTodos)());
//# sourceMappingURL=index.js.map