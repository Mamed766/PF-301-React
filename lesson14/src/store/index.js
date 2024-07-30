import { configureStore } from "@reduxjs/toolkit";
import { counterReducers } from "./counterSlice/counterSlice";
import { todoReducers } from "./todoSlice/TodoSlice";

const reducer = {
  counter: counterReducers,
  todos: todoReducers,
};

export const store = configureStore({
  reducer,
});
