import { useAddress, useAuth, useCart } from 'context'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Checkout.module.css"
import { v4 as uuid } from "uuid"
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const Checkout = () => {
    const { firstName, email } = useAuth();
    const navigate = useNavigate();
    const { addressList, selectedAddressId, addressDispatch } = useAddress();
    const address = addressList?.find(({ _id }) => _id === selectedAddressId)
    const { cartItem, totalPrice, deliveryCharges, cartDispatch } = useCart();
    const { coupon, priceAfterCoupon } = useAddress();

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('razor pay sdk failed')
            return
        }
        const options = {
            key: "rzp_test_X9pzt6NPK1ihnB",
            amount: priceAfterCoupon.toFixed(2) * 100,
            currency: "INR",
            name: "Deep Store",
            description: "Enjoy Reading book.",
            handler: ({ razorpay_payment_id }) => {
                addressDispatch({
                    type: "ADD_ORDERS",
                    payload: {
                        orderId: uuid(),
                        paymentId: razorpay_payment_id,
                        coupon,
                        priceAfterCoupon,
                        totalPrice,
                        deliveryCharges,
                        address: addressList,
                        products: [...cartItem],
                    }
                });

                cartDispatch({ type: "INITIAL_CART", payload: [] })
                navigate("/order")
            },
            prefill: {
                name: firstName,
                email: email,
            },
            theme: {
                "color": "#55c57a"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


    return (
        <div className={styles.order}>
            <h2>Order Details</h2>
            <div>
                {cartItem.map(({ title, qty, _id, price }) => <div className={`${styles.orderDetails} line padding`} key={_id}>
                    <div>
                        <p>Title: </p>
                        <p>{title}</p>
                    </div>
                    <div>
                        <p>Quantity : </p>
                        <p>{qty}</p>
                    </div>
                    <div>
                        <p>Price:</p>
                        <p> {price}</p>
                    </div>
                </div>
                )}
            </div>
            <h2>Address Details</h2>
            <div className={`${styles.orderDetails}`}>
                <div>
                    <p>FirstName: </p><p>{address?.firstName},</p>
                </div>
                <div>
                    <p>home: </p><p>{address?.home},</p>
                </div>
                <div>
                    <p>state: </p><p>{address?.state},</p>
                </div>
                <div>
                    <p>country: </p><p>{address?.country},</p>
                </div>
                <div>
                    <p>pinCode: </p><p>{address?.pinCode},</p>
                </div>
                <div>
                    <p>mobileNumber: </p><p>{address?.mobileNumber}</p>
                </div>
            </div>
            <h2>Price Details</h2>
            <div className={`${styles.orderDetails}`}>
                <div>
                    <p>Price: </p>
                    <p>{(totalPrice.sum).toFixed(2)}</p>
                </div>
                <div>
                    <p>Discount:</p>
                    <p> {(totalPrice.discount).toFixed(2)}</p>
                </div>
                <div>
                    <p>Delivery Charges:</p>
                    <p> {(deliveryCharges).toFixed(2)}</p>
                </div>
                {coupon && <div><p>Coupon:</p><p> {coupon}</p></div>}
                <div>
                    <p>Total Amount:</p>
                    <p> {(priceAfterCoupon).toFixed(2)}</p>
                </div>
            </div>
            <button className='btn btn-solid' onClick={displayRazorpay}>Order</button>
        </div >
    )
}

export { Checkout }