import React from 'react'
import { VerticalCard, CheckOut } from "components"
import './Cart.css'
import { useCart } from 'context'

const Cart = () => {
    const { cartItem } = useCart();
    return (
        <>
            <h3 className="page-title">My Cart</h3>
            <div className="cart">
                <div className="cart=list">
                    {cartItem.map(pro => <VerticalCard item={pro} key={pro._id} />)}
                </div>
                <CheckOut />
            </div>
        </>
    )
}

export { Cart }