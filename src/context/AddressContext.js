import React, { useContext, createContext, useReducer } from 'react'
import { addressReducer } from 'reducer';
import { useCart } from '.';
import { getPriceAfterCoupon } from "utilities"
const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const { finalPrice, cartItem } = useCart();
    const [addressState, addressDispatch] = useReducer(addressReducer, { addressList: [], selectedAddressId: "", coupon: "", orders: [] })
    const { addressList, selectedAddressId, coupon, orders } = addressState;
    const priceAfterCoupon = getPriceAfterCoupon(coupon, finalPrice);
    return (<AddressContext.Provider value={{ addressList, selectedAddressId, coupon, orders, priceAfterCoupon, addressDispatch }}>
        {children}
    </AddressContext.Provider>)
}

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress }