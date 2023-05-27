import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserType } from "../../types/data";
import { getUserFromLS } from "../../functions/getUserFromLS";

const initialState: UserType[] = getUserFromLS();

const curUserSlice = createSlice({
  name: "curUser",
  initialState,
  reducers: {
    addCurUser: (state, action) => {
      const user: UserType = action.payload;
      state.push(user);
    },
    setUserFromLocalS: (state, action) => {
      state.push(action.payload);
    },
    clearCurUser: () => {
      return initialState;
    },
  },
});

export const { addCurUser, setUserFromLocalS, clearCurUser } =
  curUserSlice.actions;

export const selectCurUser = (state: RootState) => state.curUser;

export default curUserSlice.reducer;
