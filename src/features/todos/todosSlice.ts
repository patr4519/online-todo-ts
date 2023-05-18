import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ItemTodo } from "../../types/data";

const initialState: ItemTodo[] = [
  // { id: 1, text: "Shop", completed: false, description: "go to shop" },
  // { id: 2, text: "Work", completed: false, description: "go to work" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem(state, action) {
      const { payload } = action;
      state.push({id: Date.now(), text: payload, completed: false, description: ''})
    },
    clearItems() {
      return initialState;
    },
    removeItem(state, action) {
      const {payload} = action;
      return state.filter(item => item.id !== payload)
    },
    changeComplete(state, action) {
      const id = action.payload;
      return state.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    }
  },
});

export const { addItem, clearItems, removeItem, changeComplete } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
