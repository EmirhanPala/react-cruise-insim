import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { insimApi } from "src/service/base";

import { authSlice } from "./authSlice";
import { connectionSlice } from "./connectionSlice";
import { mciSlice } from "./mciSlice";

const initialState = {};
const store = configureStore({
    preloadedState: initialState,
    reducer: {
        [insimApi.reducerPath]: insimApi.reducer, // RTK Query
        connection: connectionSlice.reducer,
        auth: authSlice.reducer,
        mci: mciSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(insimApi.middleware),

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }).concat([insimApi.middleware, apiMiddleware])
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
