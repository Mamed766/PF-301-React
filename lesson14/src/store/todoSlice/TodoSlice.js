import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "../../services/api";

export const fetchtodosApi = createAsyncThunk("todos/get", () => fetchTodo());

export const createtodo = createAsyncThunk("todos/create");

const IntitalState = {
  todos: [],
  isLoading: false,
  error: null,
};
export const todoSLice = createSlice({
  name: "todos",
  initialState: IntitalState,

  extraReducers: (builder) => {
    builder.addCase(fetchtodosApi.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchtodosApi.fulfilled, (state, action) => {
      return { ...state, isLoading: false, todos: action.payload };
    });
    builder.addCase(fetchtodosApi.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.error };
    });
  },
});

export const todoReducers = todoSLice.reducer;
export const todoSelector = (state) => state.todos;
