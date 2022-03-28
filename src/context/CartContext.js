import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { cartReducer, filterReducer, wishlistReducer } from 'reducer';
import { getRequestDataFromServer } from 'utilities'
const CartContext = createContext();


const CartProvider = ({ children }) => {
  const { cart, wishlist } = JSON.parse(localStorage.getItem("userData")) || { cart: [], wishlist: [] }

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: cart
  })
  const { productsData, cartItem } = cartState
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
  const { sortBy, selectedRating, priceRange, selectedCategory, searchQuery } = filterState

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItem: wishlist
  })
  const { wishlistItem } = wishlistState


  return (
    <CartContext.Provider value={{ productsData, cartItem, cartDispatch, sortBy, selectedRating, priceRange, selectedCategory, searchQuery, filterDispatch, wishlistItem, wishlistDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }