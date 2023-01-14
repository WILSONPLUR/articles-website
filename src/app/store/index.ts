import {configureStore} from "@reduxjs/toolkit";
import {mainSlice} from "../slices/Main";

export const store = configureStore({
    reducer: mainSlice.reducer
});

export type AppDispatch = typeof store.dispatch
