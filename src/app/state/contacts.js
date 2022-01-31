import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL_BASE = process.env.BASE_URL;

export const createContact = createAsyncThunk("CONTACT_REQUEST", (data) => {
  return axios
    .post(`http://${URL_BASE}/contacts`, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    })
    .then((respuesta) => respuesta.data);
});

export const getContacts = createAsyncThunk("ALLCONTACT_RESPONSE", () => {
  return axios
    .get(`http://${URL_BASE}/contacts`)
    .then((respuesta) => respuesta.data);
});

const contactReducer = createReducer([], {
  [createContact.fulfilled]: (state, action) => action.payload,
  [getContacts.fulfilled]: (state, action) => action.payload,
});

export default contactReducer;
