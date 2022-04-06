import './App.css';
import { Home, Products, Wishlist, Cart, Login, Signup, Profile, SingleProduct } from "pages";
import { Navbar, Footer, Error, UserProfile, Address } from 'components';
import { Routes, Route } from "react-router-dom";
import MockMan from 'mockman-js';
import { ScrollTop } from 'utilities';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from "PrivateRoute"
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
            <Route path="/profile" element={<Profile />} >
              <Route index element={<UserProfile />} />
              <Route path="address" element={<Address />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
