/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(task) {
    this.todo.push(task);
  }
  remove(index) {
    this.todo.splice(index, 1);
  }
  update(index, task) {
    if (index < this.todo.length) {
      this.todo[index] = task;
    }
  }
  get(index) {
    if (index < this.todo.length) {
      return this.todo[index];
    }
    return null;
  }
  getAll() {
    return this.todo;
  }
  clear() {
    this.todo = [];
  }
}
let all = new Todo();
all.add("Study");
all.add("Task 2");
all.update(1, "Task 1");
// all.remove(0);
// all.get(1);
// all.clear();
console.log(all.getAll());

module.exports = Todo;
