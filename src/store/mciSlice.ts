import { createSlice } from "@reduxjs/toolkit";
import type MapReducerPayloads from "src/models/store/MapReducerPayloads";

export interface IMciSlice {
    wayDedect: boolean;
    wayName: string;
    speedLimit: number;
    freePit: boolean;
};

export const mciSlice = createSlice<IMciSlice, MapReducerPayloads<IMciSlice, {
    setWayDedect: boolean;
    setWayName: string;
    setSpeedLimit: number;
    setFreePit: boolean;
}>>({
    name: 'mci',
    initialState: {
        wayDedect: false,
        wayName: "Spectator",
        speedLimit: 0,
        freePit: false,
    },
    reducers: {
        setWayDedect: (state, action) => {
            state.wayDedect = action.payload;
        },
        setWayName: (state, action) => {
            state.wayName = action.payload;
        },
        setSpeedLimit: (state, action) => {
            state.speedLimit = action.payload;
        },
        setFreePit: (state, action) => {
            state.freePit = action.payload;
        },
    },
});