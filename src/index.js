import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider, CartProvider } from 'context';
import { makeServer } from 'server'
import './index.css'


makeServer();
ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </CartProvider>
  </AuthProvider>
  ,
  document.getElementById('root')
);


