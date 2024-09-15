import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
      state.loading = false;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectItemsContacts = (state) => state.contacts.items;
export const selectLoadingContacts = (state) => state.contacts.loading;
export const selectErrorContacts = (state) => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;
