import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./slice";

export const store = configureStore({
    reducer: eventsReducer
    } 
);

