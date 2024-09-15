import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload.id);
    });
  },
});

export const selectItemsContacts = (state) => state.contacts.items;
export const selectLoadingContacts = (state) => state.contacts.loading;
export const selectErrorContacts = (state) => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const contacts = selectItemsContacts(state);
  const filterName = state.filters.name;
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );
};

export const contactsReducer = contactsSlice.reducer;
