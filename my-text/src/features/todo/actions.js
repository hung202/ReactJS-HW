import { createAction } from "@reduxjs/toolkit";
let nextId = 0;
export const getTodoList = createAction('todo/getTodoList');
export const addTodoItem = createAction('todo/addTodoItem', (todoItem) => {
    nextId++;
    return {
        payload: {
            content: todoItem,
            id: nextId,
            status: 'todo'
        }
    }
});
export const removeTodoItem = createAction('todo/removeTodoItem');
export const finishTodoItem = createAction('todo/finishTodoItem');