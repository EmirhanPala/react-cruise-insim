import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
type MapReducerPayloads<State, ReducerPayloadMap> = {
    [K in keyof ReducerPayloadMap]: CaseReducer<State, PayloadAction<ReducerPayloadMap[K]>>
};
export default MapReducerPayloads;