import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider, CartProvider, AddressProvider } from 'context';
import { makeServer } from 'server'
import './index.css'


makeServer();
ReactDOM.render(
  <AuthProvider>
    <AddressProvider>
      <CartProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </CartProvider>
    </AddressProvider>
  </AuthProvider>
  ,
  document.getElementById('root')
);


