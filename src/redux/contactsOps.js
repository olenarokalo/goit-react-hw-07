import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e6d8f717055714e58ab338.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "items/fetchAll",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/contacts");
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "items/addContact",
  async (newContact, thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", newContact);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "items/deleteContact",
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
