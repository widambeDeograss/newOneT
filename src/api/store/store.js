import authReducer from "../auth/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../books/bookSlice'
import appStateReducer from './appStateSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        book:booksReducer,
        appState:appStateReducer
    },
    devTools:true
})