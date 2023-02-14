import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import { createSlice } from '@reduxjs/toolkit';

  const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const contactsSlice = createSlice({
        name: 'contacts',
        initialState: { 
            items: [], 
            isLoading: false, 
            error: null
        },
    
        extraReducers: {
            [fetchContacts.pending]: handlePending,
            [addContact.pending]: handlePending,
            [deleteContact.pending]: handlePending,

            [fetchContacts.rejected]: handleRejected,
            [addContact.rejected]: handleRejected,
            [deleteContact.rejected]: handleRejected,

            [fetchContacts.fulfilled] (state, action) {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            },
            [addContact.fulfilled] (state, action) {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            },

            [deleteContact.fulfilled] (state, action) {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            },
    },
})

export const contactsReducer = contactsSlice.reducer;


