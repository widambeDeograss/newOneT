import { apiSlice } from "../app/app";
import authReducer from "../auth/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})