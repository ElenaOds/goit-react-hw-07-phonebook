import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get(
    'https://63e53f6f8e1ed4ccf6f0d5a3.mockapi.io/contacts'
  );
  return data;
});

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post(
          'https://63e53f6f8e1ed4ccf6f0d5a3.mockapi.io/contacts',
          newContact
        );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://63e53f6f8e1ed4ccf6f0d5a3.mockapi.io/contacts/${contactId}`
      );
     
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


