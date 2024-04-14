import { createSlice } from "@reduxjs/toolkit";
import ConnectionDTO from "src/models/ConnectionDTO";
import type MapReducerPayloads from "src/models/store/MapReducerPayloads";

export interface IConnectionSlice {
    activeRow?: ConnectionDTO;
};

export const connectionSlice = createSlice<IConnectionSlice, MapReducerPayloads<IConnectionSlice, {
    setActiveRow?: ConnectionDTO;
}>>({
    name: "connection",
    initialState: {
        activeRow: new ConnectionDTO(),
    },
    reducers: {
        setActiveRow: (state, action) => {
            state.activeRow = action.payload;
        },
    },
});