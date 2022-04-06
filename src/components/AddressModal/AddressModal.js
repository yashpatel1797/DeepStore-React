import { useAddress } from 'context'
import React, { useState } from 'react'
import ReactDOM from "react-dom"
import styles from "./AddressModal.module.css"
import { addressDetails } from "static/addressDetails"
import { v4 as uuid } from "uuid";
const AddressModal = ({ setShowModal, editAddress }) => {
    const { addressDispatch } = useAddress();
    const [formDetails, setFormDetails] = useState(
        editAddress ?? {
            firstName: "",
            mobileNumber: "",
            pinCode: "",
            home: "",
            state: "",
            country: "",
        })

    const dummyDataHandler = () => {
        setFormDetails(addressDetails);
    }
    const inputHandler = (e, field) => {
        setFormDetails((pre) => ({
            ...pre, [field]: e.target.value
        }))
    }
    const formHandler = (e) => {
        e.preventDefault()
        addressDispatch({
            type: "UPDATE_ADDRESS",
            payload: !editAddress
                ? { _id: uuid(), ...formDetails }
                : { isEdit: true, addressList: formDetails },
        })
        setShowModal(false);
    }
    return ReactDOM.createPortal(
        <div className=" modal-active modal-container">
            <div className={`${styles.dialog} dialog`}>
                <span className={`${styles.modal_header} modal-title fn-size-l`}>Add new address
                    <button className='btn btn-icon-only' onClick={() => setShowModal(false)}>
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </span>
                <form onSubmit={formHandler}>
                    <input
                        placeholder="Enter your name"
                        className="input-field"
                        type="text"
                        id="firstName"
                        value={formDetails.firstName}
                        required
                        onChange={(e) => inputHandler(e, "firstName")}
                    />
                    <input
                        placeholder="Enter mobile number"
                        className="input-field"
                        type="number"
                        id="mobileNumber"
                        value={formDetails.mobileNumber}
                        required
                        onChange={(e) => inputHandler(e, "mobileNumber")}
                    />
                    <input
                        placeholder="Pin code"
                        className="input-field"
                        type="number"
                        id="pinCode"
                        value={formDetails.pinCode}
                        required
                        onChange={(e) => inputHandler(e, "pinCode")}
                    />
                    <input
                        placeholder="Enter house number, flat number"
                        className="input-field"
                        type="text"
                        id="home"
                        value={formDetails.home}
                        required
                        onChange={(e) => inputHandler(e, "home")}
                    />
                    <input
                        placeholder="Enter your state"
                        className="input-field"
                        type="text"
                        id="state"
                        value={formDetails.state}
                        required
                        onChange={(e) => inputHandler(e, "state")}
                    />
                    <select
                        placeholder="Enter your country"
                        className="input-field"
                        type="text"
                        id="country"
                        onChange={(e) => inputHandler(e, "country")}
                    >
                        <option value="India">India</option>
                        <option value="United state">United State</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </select>
                    <button
                        type="button"
                        className='btn btn-outline'
                        onClick={dummyDataHandler}>Fill with dummy address</button>
                    <div>
                        <button className='btn btn-solid'>Save</button>
                        <button
                            onClick={() => setShowModal(false)}
                            className='btn btn-solid btn-outline'>cancel</button>
                    </div>
                </form>
            </div>
        </div>, document.getElementById("modal")
    )
}

export { AddressModal }