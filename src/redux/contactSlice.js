import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: [],
    },
   
    reducers: {
        addContact(state, action) {
            state.contacts = action.payload;    
        },

        delContact(state, action) { 
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);      
        },
    },
});

const persistConfig = {
    key: 'root',
    storage,
  }
 
export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, delContact } = contactSlice.actions; 

export const getContacts = state => state.contact.contacts;