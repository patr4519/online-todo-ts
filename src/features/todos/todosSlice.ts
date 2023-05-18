import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ItemTodo } from "../../types/data";

const initialState: ItemTodo[] = [
  { id: 1, text: "Shop", completed: false, description: "go to shop" },
  { id: 2, text: "Work", completed: false, description: "go to work" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem(state, action) {
      const { payload } = action;
      state.push({id: Date.now(), text: payload, completed: false, description: ''})
    },
  },
});

export const { addItem } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
