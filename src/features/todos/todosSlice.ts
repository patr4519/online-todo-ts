import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  items: [{ text: "Shop", completed: false, description: "go to shop" }],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem(state, action) {
        console.log('add action')
    }
  },
});

export const {addItem} = todosSlice.actions;

export default todosSlice.reducer;