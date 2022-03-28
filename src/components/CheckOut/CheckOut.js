import React, { useState, useEffect } from 'react'
import { useCart } from 'context';
import { calculatePrice, calculateFinalPrice, calculateDeliveryCharges } from 'utilities';
import "./CheckOut.css"
const CheckOut = () => {
    const { cartItem } = useCart();
    const totalPrice = calculatePrice(cartItem)
    const finalPrice = calculateFinalPrice(totalPrice)
    const deliveryCharges = calculateDeliveryCharges(finalPrice)
    return (
        <>
            <div className="cart-checkout">
                <h1>Price Details</h1>
                <div>
                    <p>Price(2 items)</p>
                    <p>₹{totalPrice.sum}</p>
                </div>
                <div>
                    <p>Discount</p>
                    <p>-₹{totalPrice.discount}</p>
                </div>
                <div>
                    <p>Delivery Charges</p>
                    <p>₹{deliveryCharges}</p>
                </div>
                <div>
                    <p>Total Amount</p>
                    <p>₹{finalPrice}</p>
                </div>
                <p>You will save ₹4000 on this order</p>
                <button className="btn btn-solid">Place Order</button>

            </div>
        </>
    )
}

export { CheckOut }