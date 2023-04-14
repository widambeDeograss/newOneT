import { apiSlice } from "../app/app";
import authReducer from "../auth/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../books/bookSlice'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        book:booksReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})