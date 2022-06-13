import './App.css';
import { Home, Products, Login, Signup, Profile, OrderDetails } from "pages";
import { Navbar, Footer, Error, UserProfile, Address, Loader } from 'components';
import { Routes, Route } from "react-router-dom";
import MockMan from 'mockman-js';
import { ScrollTop } from 'utilities';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from "PrivateRoute"
import React, { lazy, Suspense } from 'react';

const Cart = lazy(() => import('pages/Cart/Cart.js'))
const Wishlist = lazy(() => import('pages/Wishlist/Wishlist.js'))
const Checkout = lazy(() => import('pages/Checkout/Checkout.js'))
const SingleProduct = lazy(() => import('pages/SingleProduct/SingleProduct.js'))
function App() {
  return (
    <>
      <div className="App">
        <ScrollTop />
        <ToastContainer
          position='top-right'
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={5}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mockman" element={<MockMan />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<OrderDetails />} />
              <Route path="/profile" element={<Profile />} >
                <Route index element={<UserProfile />} />
                <Route path="address" element={<Address />} />

              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
