import React from 'react'
import { VerticalCard, CheckOut } from "../../components/index"
import './Cart.css'
import { useCart } from '../../context/CartContext'

const Cart = () => {
    const { cartState: { cartItem } } = useCart();

    console.log(cartItem, "in cart page");
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