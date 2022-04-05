import React, { useState, useEffect } from 'react'
import { useCart } from 'context';
import { calculatePrice, calculateFinalPrice, calculateDeliveryCharges } from 'utilities';
import "./CheckOut.css"
const CheckOut = () => {
    const { cartItem } = useCart();
    const totalPrice = calculatePrice(cartItem)
    const deliveryCharges = calculateDeliveryCharges(totalPrice)
    const finalPrice = calculateFinalPrice(totalPrice, deliveryCharges)
    return (
        <>
            <div className="cart-checkout">
                <h1>Price Details</h1>
                <div>
                    <p>Price({cartItem.length} items)</p>
                    <p>₹{(totalPrice.sum).toFixed(2)}</p>
                </div>
                <div>
                    <p>Discount</p>
                    <p>-₹{(totalPrice.discount).toFixed(2)}</p>
                </div>
                <div>
                    <p>Delivery Charges</p>
                    <p>₹{(deliveryCharges).toFixed(2)}</p>
                </div>
                <div>
                    <p>Total Amount</p>
                    <p>₹{(finalPrice).toFixed(2)}</p>
                </div>
                <p>You will save {(totalPrice.discount).toFixed(2)} on this order</p>
                <button className="btn btn-solid">Place Order</button>

            </div>
        </>
    )
}

export { CheckOut }