import { createSlice } from '@reduxjs/toolkit';
import { operations } from './operations';

const initialState = {
  events: [],
  current: null,
  isLoading: false,
  error: null,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: {
    [operations.fetchAllEvents.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.events = action.payload;
      state.current = null;
    },
    [operations.fetchAllEvents.pending](state, action) {
      state.isLoading = true;
    },
    [operations.fetchAllEvents.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.current = null;
    },

    [operations.fetchEventDetails.fulfilled](state, action) {
        state.error = null;
        state.isLoading = false;
        state.current = action.payload;
      },
    [operations.fetchEventDetails.pending](state, action) {
        state.isLoading = true;
      },
    [operations.fetchEventDetails.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
      },

    [operations.createEvent.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [operations.createEvent.pending](state, action) {
      state.isLoading = true;
    },
    [operations.createEvent.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [operations.deleteEvent.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [operations.deleteEvent.pending](state, action) {
      state.isLoading = true;
    },
    [operations.deleteEvent.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [operations.updateEvent.fulfilled](state, action) {
      const index = state.events.indexOf(action.payload.data);
      if (index > 0) {
        state.events.splice(index, 1, action.payload.data);
      }
      state.error = null;
    },
    [operations.updateEvent.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const eventsReducer = eventSlice.reducer;