
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, refreshThunk, registerThunk } from "./authOperation";


const initialState = {
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
    userData: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {

    },
    extraReducers: builder => builder.addCase(loginThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.userData =  payload.user;
        state.authenticated = true;
        state.token = payload.token;
    })
    .addCase(registerThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.userData =  payload.user;
        state.authenticated = true;
        state.token = payload.token;
    })
    .addCase(refreshThunk.fulfilled,(state, {payload}) => {
        state.isLoading = false;
        state.userData =  payload;
        state.authenticated = true;
        
    })
    .addCase(logOutThunk.fulfilled,() => {
        return initialState
        
    })
    .addMatcher(isAnyOf(
        loginThunk.pending,
         registerThunk.pending,
          refreshThunk.pending,
          logOutThunk .pending,
          ), 
          state => {
        state.isLoading = true;
            state.error =  null;
    })
.addMatcher(isAnyOf(
    loginThunk.rejected, 
    registerThunk.rejected, 
    refreshThunk.rejected,
    logOutThunk.rejected
    ),
     (state, {payload}) => {
    state.isLoading = false;
        state.error =  payload;
})

})

