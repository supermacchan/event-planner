import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./eventSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        events: eventsReducer,
        filters: filtersReducer,
    }
});

