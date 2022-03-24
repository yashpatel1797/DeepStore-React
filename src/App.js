import './App.css';
import { Home, Products, Wishlist, Cart, Login, Signup } from "./pages/index";
import { Navbar, Footer } from './components/index';
import { Routes, Route } from "react-router-dom";
import MockMan from 'mockman-js';
import { ScrollTop } from './utilities/helpers/ScrollTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoute } from "./PrivateRoute/PrivateRoute"
function App() {
  return (
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
