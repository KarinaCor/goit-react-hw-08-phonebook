import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from "./contactsOperation";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filterTerm: '',
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => 
    builder
    .addCase(fetchContactsThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.contacts =  payload;
      
    })
    .addCase(addContactsThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.contacts =  [...state.contacts , payload];
      
    })
    .addCase(deleteContactsThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.contacts =  state.contacts.filter(contact => contact.id !== payload.id);
      
    })
     .addMatcher(isAnyOf(
        fetchContactsThunk.pending, addContactsThunk.pending, deleteContactsThunk.pending), 
          state => {
        state.isLoading = true;
            state.error =  null;
    })
.addMatcher(isAnyOf(
    fetchContactsThunk.rejected, addContactsThunk.rejected, deleteContactsThunk.rejected),
     (state, {payload}) => {
    state.isLoading = false;
        state.error =  payload;
})

})

export const contactsReducer = contactsSlice.reducer