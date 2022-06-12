import React, { useState } from 'react'
import { useAddress } from 'context'
import { AddressModal, AddressCard } from ".."
import styles from "./Address.module.css";
const Address = ({ setModal }) => {
    const [showModal, setShowModal] = useState(false);
    const [editAddress, setEditAddress] = useState(null);
    const { addressList } = useAddress();
    const AddAddressHandler = () => {
        setEditAddress(null)
        setShowModal(true);
    }
    return (
        <div className={styles.header}>
            {showModal && <AddressModal setShowModal={setShowModal} editAddress={editAddress} />}
            <button
                className={`${styles.action} btn btn-outline btn-icon-center`}
                onClick={AddAddressHandler}>
                <span className="material-icons"> add </span>
                Add New Address
            </button>
            <ul className="list-spaced list-radio fn-size-m">
                {addressList.length > 0 ? (addressList.map((address) =>
                    <AddressCard
                        address={address}
                        key={address._id}
                        setShowModal={setShowModal}
                        setEditAddress={setEditAddress}
                        setModal={setModal} />
                )) : (
                    <li>Please add an address.</li>
                )
                }
            </ul>
        </div >
    )
}

export { Address }