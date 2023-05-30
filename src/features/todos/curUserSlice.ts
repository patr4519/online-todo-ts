import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserType } from "../../types/data";
import { getUserFromLS } from "../../functions/getUserFromLS";

const initialState: UserType[] = getUserFromLS();

const curUserSlice = createSlice({
  name: "curUser",
  initialState,
  reducers: {
    addCurUser: (state, action: PayloadAction<UserType>) => {
      const user = action.payload;
      state.push(user);
    },
    clearCurUser: () => {
      return [];
    },
  },
});

export const { addCurUser, clearCurUser } = curUserSlice.actions;

export const selectCurUser = (state: RootState) => state.curUser[0];

export default curUserSlice.reducer;
