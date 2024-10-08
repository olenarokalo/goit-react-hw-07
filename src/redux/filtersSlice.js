import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectItemsContacts } from "./contactsSlice";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const selectResultsFilters = createSelector(
  [selectItemsContacts, selectNameFilter],
  (items, filterName) => {
    if (!filterName) return items;
    return items.filter(({ name }) => name.toLowerCase().includes(filterName));
  }
);

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
