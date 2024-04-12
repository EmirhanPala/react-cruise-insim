import { createSlice } from "@reduxjs/toolkit";
// import LoginDTO from "src/models/base/LoginDTO";
import type MapReducerPayloads from "src/models/store/MapReducerPayloads";

export interface ILogin {
    // activeRow: LoginDTO;
    isLoggedIn: boolean;
};

export const authSlice = createSlice<ILogin, MapReducerPayloads<ILogin, {
    // setActiveRow: LoginDTO;
    setIsLoggedIn: boolean;
}>>({
    name: "auth",
    initialState: {
        // activeRow: new LoginDTO(),
        isLoggedIn: false,
    },
    reducers: {
        // setActiveRow: (state, action) => {
        //     state.activeRow = action.payload;
        // },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});