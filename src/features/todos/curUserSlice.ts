import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserType } from "../../types/data";

const initialState: UserType[] = [];

const curUserSlice = createSlice({
    name: 'curUser',
    initialState,
    reducers: {
        addCurUser: (state, action) => {

        }
    }
})

export const {addCurUser} = curUserSlice.actions;

export const selectCurUser = (state: RootState) => state.curUser;

export default curUserSlice.reducer;