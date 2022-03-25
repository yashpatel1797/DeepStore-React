import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { cartReducer } from 'reducer/cartReducer';
import { filterReducer } from 'reducer/filterReducer';
import { wishlistReducer } from 'reducer/wishlistReducer';
import { getRequestDataFromServer } from 'utilities/helpers/http-helper'
const CartContext = createContext();


const CartProvider = ({ children }) => {
  const { cart, wishlist } = JSON.parse(localStorage.getItem("userData")) || { cart: [], wishlist: [] }

  const [{ productsData, cartItem }, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: cart
  })
  useEffect(() => {
    getRequestDataFromServer("/api/products", cartDispatch)
  }, [])

  const [{ sortBy, selectedRating, priceRange, selectedCategory, searchQuery }, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    selectedRating: 0,
    priceRange: 1000,
    selectedCategory: [],
    searchQuery: ""
  })

  const [{ wishlistItem }, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItem: wishlist
  })
  return (
    <CartContext.Provider value={{ productsData, cartItem, cartDispatch, sortBy, selectedRating, priceRange, selectedCategory, searchQuery, filterDispatch, wishlistItem, wishlistDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }