import { configureStore } from '@reduxjs/toolkit';
// import { filterSlice } from './filter/filter.slice';

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
// import { contactsApi } from './contactOperation/contactOperation';
import { authSlice } from './auth/auth.reducer';
import storage from 'redux-persist/lib/storage'
import { contactsSlice } from './contacts/contacts.reducer';


const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
//   contactsApi.middleware,
];

const authConfig ={
    key:'auth',
    storage,
    whitelist:['token']
}

export const store = configureStore({
  reducer: {
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: persistReducer(authConfig,authSlice.reducer),
    [contactsSlice.name]: contactsSlice.reducer,

    
  },
middleware
});

export const persister = persistStore(store)