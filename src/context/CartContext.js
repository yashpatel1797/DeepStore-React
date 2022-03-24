import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducer/cartReducer';
import { filterReducer } from '../reducer/filterReducer';
import { wishlistReducer } from '../reducer/wishlistReducer';
import { getRequestDataFromServer } from '../utilities/helpers/http-helper'
import { useAuth } from './AuthenticationContext';
const CartContext = createContext();


const CartProvider = ({ children }) => {
  const { authState: { token } } = useAuth();
  const { cart, wishlist } = JSON.parse(localStorage.getItem("userData")) || { cart: [], wishlist: [] }

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: cart
  })
  useEffect(() => {
    getRequestDataFromServer("/api/products", cartDispatch)
  }, [])

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    selectedRating: 0,
    priceRange: 1000,
    selectedCategory: [],
    searchQuery: ""
  })

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItem: wishlist
  })
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, filterState, filterDispatch, wishlistState, wishlistDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }