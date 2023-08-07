export const selectEvents = state => state.events.events;
export const selectCurrent = state => state.events.current;
export const selectIsLoading = state => state.events.isLoading;
export const selectError = state => state.events.error;

export const selectCategory = state => state.filters.category;
export const selectKeywords = state => state.filters.keywords;