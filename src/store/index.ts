import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { insimApi } from "src/service/base";

import { authSlice } from "./authSlice";
import { mciSlice } from "./mciSlice";

const store = configureStore({
    reducer: {
        [insimApi.reducerPath]: insimApi.reducer, // RTK Query
        auth: authSlice.reducer,
        mci: mciSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(insimApi.middleware),

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({ serializableCheck: false }).concat([insimApi.middleware, apiMiddleware])
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
