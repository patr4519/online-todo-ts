import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ItemTodo } from "../../types/data";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ItemTodo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push({
        id: Date.now(),
        text: action.payload.inputValue,
        completed: false,
        description: action.payload.description,
      });
    },
    clearItems() {
      return initialState;
    },
    removeItem(state, action: PayloadAction<number>) {
      const { payload } = action;
      return state.filter((item) => item.id !== payload);
    },
    changeComplete(state, action: PayloadAction<number>) {
      const id = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    setFromLocalS(state, action: PayloadAction<ItemTodo[]>) {
      state.push(...action.payload);
    }
  },
});

export const { addItem, clearItems, removeItem, changeComplete, setFromLocalS } =
  todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
