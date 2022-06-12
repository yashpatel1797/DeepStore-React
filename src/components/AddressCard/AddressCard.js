import React from 'react'
import { useAddress } from 'context';
import styles from "./AddressCard.module.css"
const AddressCard = ({ address, setShowModal, setEditAddress, setModal }) => {
    const { selectedAddressId, addressDispatch } = useAddress();
    const editAddressHandler = () => {
        setShowModal(true)
        setEditAddress(address)
    }
    const removeAddressHandler = () => {
        addressDispatch({ type: "REMOVE_ADDRESS", payload: address._id })
    }
    const selectAddressHandler = () => {
        addressDispatch({ type: "EDIT_SELECTED_ADDRESS", payload: address._id })
        setModal?.(false)
    }
    return (
        <div>
            <li className={styles["address-list"]}>
                <label className={`${styles["list-label"]} list-label`}>
                    <input
                        type="radio"
                        name="address"
                        checked={address._id === selectedAddressId}
                        onChange={selectAddressHandler} />
                    <div className={styles["address-details"]}>
                        <p>{address.firstName}</p>
                        <p>{address.mobileNumber}</p>
                        <p>{address.pinCode}</p>
                        <p>{address.home}</p>
                        <p>{address.state}</p>
                        <p>{address.country}</p>
                        <button className="btn btn-outline" onClick={editAddressHandler}>Edit</button>
                        <button className="btn btn-outline" onClick={removeAddressHandler}>remove</button>
                    </div>
                </label>

            </li>
        </div>
    )
}

export { AddressCard }