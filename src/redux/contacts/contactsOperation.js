import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "redux/auth/authOperation"


export const fetchContactsThunk = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkApi) => {
        try {
            const {data} = await instance.get('/contacts')
           
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addContactsThunk = createAsyncThunk(
    'contacts/addContact',
    async (formData, thunkApi) => {
        try {
            const {data} = await instance.post('/contacts', formData)
           
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const {data} = await instance.delete(`/contacts/${contactId}`)
           
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
