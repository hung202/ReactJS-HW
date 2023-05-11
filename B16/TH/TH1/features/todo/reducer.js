import { createReducer } from "@reduxjs/toolkit";
import { addTodoItem, finishTodoItem, removeTodoItem } from "./actions";
const initialState = {
    items: []
};
export const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodoItem, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(finishTodoItem, (state, action) => {
            const index = state.items.findIndex((value) => value.id === action.payload);
            if (index !== -1) {
                state.items[index].status = 'finish'
            }
        })
        .addCase(removeTodoItem, (state, action) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload
            })
        })
        .addDefaultCase(() => {})
})