import React, { useState } from 'react'
import { VerticalCard, PriceDetails, EmptyData, ChangeAddress } from "components"
import './Cart.css'
import { useCart, useAddress } from 'context'

const Cart = () => {
    const { cartItem } = useCart();
    const { addressList, selectedAddressId } = useAddress();
    const currentAddress = addressList?.find((address) => address._id === selectedAddressId)
    const dataPresent = currentAddress?.firstName ?? false;
    const [modal, setModal] = useState(false)
    return (
        <>
            <h3 className="page-title">My Cart ({cartItem.length} items)</h3>
            {cartItem.length <= 0 ? <EmptyData /> :
                <div className="cart">
                    <div className="cart-list">
                        <div className='address-info'>
                            {modal && <ChangeAddress setModal={setModal} />}
                            {dataPresent ?
                                (<div>
                                    <div>Deliver To: {currentAddress.firstName}</div>
                                    <p>{currentAddress.home}, {currentAddress.state}</p>
                                </div>) : <div>Address not selected.</div>}
                            <button className='btn btn-outline' onClick={() => setModal(pre => !pre)}>change</button>
                        </div>
                        {cartItem.map(pro => <VerticalCard item={pro} key={pro._id} />)}
                    </div>
                    <PriceDetails />
                </div>}
        </>
    )
}

export { Cart }