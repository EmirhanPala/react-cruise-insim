import { createSlice } from "@reduxjs/toolkit";
import type MapReducerPayloads from "src/models/store/MapReducerPayloads";
import UserInfoDTO from "src/models/UserInfoDTO";

export interface IUserInfoSlice {
    activeRow: UserInfoDTO;
};

export const userInfoSlice = createSlice<IUserInfoSlice, MapReducerPayloads<IUserInfoSlice, {
    setActiveRow: UserInfoDTO;
}>>({
    name: "userInfo",
    initialState: {
        activeRow: new UserInfoDTO(),
    },
    reducers: {
        setActiveRow: (state, action) => {
            state.activeRow = action.payload;
        },
    },
});