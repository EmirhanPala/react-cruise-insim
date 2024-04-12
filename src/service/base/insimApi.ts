import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const insimApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    tagTypes: ["messages"],
    endpoints: () => ({
        
    }),
});
// export const {

// } = insimApi;
