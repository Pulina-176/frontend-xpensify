import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store , persistor } from './store.js';
import { PersistGate } from 'redux-persist/integration/react';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
 );