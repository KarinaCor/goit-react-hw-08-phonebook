import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store = {store}>
    <PersistGate persistor = {persistor}>
      <App /> 
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
