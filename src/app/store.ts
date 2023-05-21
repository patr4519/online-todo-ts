import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice";
import curUserSlice from "../features/todos/curUserSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    curUser: curUserSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function saveStateToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
}

store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});
