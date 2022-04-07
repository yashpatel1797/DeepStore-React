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
    <CartProvider>
      <AddressProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </AddressProvider>
    </CartProvider>
  </AuthProvider>
  ,
  document.getElementById('root')
);


