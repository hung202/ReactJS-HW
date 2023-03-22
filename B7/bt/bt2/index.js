var Todo = /** @class */ (function () {
    function Todo(job, day) {
        this.job = job;
        this.day = day;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.list = [];
    }
    TodoList.prototype.addTodoList = function (note) {
        this.list.push(note);
    };
    return TodoList;
}());
var note1 = new Todo('1', '2');
var note2 = new Todo('2', '3');
var notelist = new TodoList();
notelist.addTodoList(note2);
notelist.addTodoList(note1);
console.log(notelist);
