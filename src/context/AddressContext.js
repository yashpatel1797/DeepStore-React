import React, { useContext, createContext, useReducer } from 'react'
import { addressReducer } from 'reducer';

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const [addressState, addressDispatch] = useReducer(addressReducer, { addressList: [], selectedAddressId: "", coupon: "" })
    const { addressList, selectedAddressId, coupon } = addressState;
    return (<AddressContext.Provider value={{ addressList, selectedAddressId, coupon, addressDispatch }}>
        {children}
    </AddressContext.Provider>)
}

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress }