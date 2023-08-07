import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: "",
  keywords: ""
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByCategory(state, action) {
      state.category = action.payload;
    },
    filterByKeywords(state, action) {
      state.keywords = action.payload;
    },
  }
});

export const { filterByCategory, filterByKeywords } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
