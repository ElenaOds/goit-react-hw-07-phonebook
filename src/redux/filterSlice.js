import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
   
    reducers: {
        filerContact(state, action) {
            state.filter = action.payload;    
        },
    },
});

export const { filerContact } = filterSlice.actions; 

export const setFilter = state => state.filter.filter;