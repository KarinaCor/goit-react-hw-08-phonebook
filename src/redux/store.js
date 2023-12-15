import { configureStore } from '@reduxjs/toolkit';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authSlice } from './auth/auth.reducer';
import storage from 'redux-persist/lib/storage'
import { contactsSlice } from './contacts/contacts.reducer';
import { filterSlice } from './filter/filter.slice';





const authConfig ={
    key:'auth',
    storage,
    whitelist:['token']
}

export const store = configureStore({
  reducer: {
   
    [authSlice.name]: persistReducer(authConfig,authSlice.reducer),
    [contactsSlice.name]: contactsSlice.reducer,
    [filterSlice.name] : filterSlice.reducer

    
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
   serializableCheck: {
     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
 }),



});

export const persistor = persistStore(store)