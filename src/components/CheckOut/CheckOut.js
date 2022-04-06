import React, { useState } from 'react'
import { useAddress, useCart } from 'context';
import { calculatePrice, calculateFinalPrice, calculateDeliveryCharges, getPriceAfterCoupon } from 'utilities';
import "./CheckOut.css"
import styles from "components/AddressModal/AddressModal.module.css";
import ReactDOM from "react-dom"

const CheckOut = () => {
    const { cartItem } = useCart();
    const totalPrice = calculatePrice(cartItem)
    const deliveryCharges = calculateDeliveryCharges(totalPrice)
    const finalPrice = calculateFinalPrice(totalPrice, deliveryCharges)
    const [showModal, setShowModal] = useState(false)
    const { coupon, addressDispatch } = useAddress();
    const priceAfterCoupon = getPriceAfterCoupon(coupon, finalPrice);
    const couponHandler = (e) => {
        addressDispatch({ type: "UPDATE_COUPON", payload: e.target.value })
        setShowModal(false)
    }
    const removeCouponHandler = () => {
        addressDispatch({ type: "DELETE_COUPON" })
    }
    return (
        <>
            {showModal &&
                ReactDOM.createPortal(
                    <div className=" modal-active modal-container">
                        <div className={`${styles.dialog} dialog`}>
                            <span className={`${styles.modal_header} modal-title fn-size-l`}>Special Coupon
                                <button className='btn btn-icon-only' onClick={() => setShowModal(false)}>
                                    <span className="material-icons">
                                        close
                                    </span>
                                </button>
                            </span>
                            <ul className="list-spaced list-radio fn-size-m">
                                <li>
                                    <label className="list-label">
                                        <input
                                            type="radio"
                                            name="coupon"
                                            value="50OFF"
                                            checked={coupon === "50OFF"}
                                            onChange={couponHandler}
                                        />
                                        ₹50 off on total amount
                                    </label>
                                </li>
                                <li>
                                    <label className="list-label">
                                        <input
                                            type="radio"
                                            name="coupon"
                                            value="10%OFF"
                                            checked={coupon === "10%OFF"}
                                            onChange={couponHandler}
                                        />
                                        10% Discount for new users
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>, document.getElementById("modal"))}
            <div className="cart-checkout" >
                <button
                    className='btn btn-outline btn-icon-center'
                    onClick={() => setShowModal(pre => !pre)}>
                    <span className="material-icons">local_offer</span>
                    Coupon
                </button>
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
                {coupon && <div>
                    <p>{coupon}</p>
                    <p>
                        <button className="btn btn-coupon btn-icon-only" onClick={removeCouponHandler}>
                            <span className="material-icons"> close </span>
                        </button>
                    </p>
                </div>}
                <div>
                    <p>Total Amount</p>
                    <p>₹{(priceAfterCoupon).toFixed(2)}</p>
                </div>
                <p>You will save {(totalPrice.discount).toFixed(2)} on this order</p>
                <button className="btn btn-solid">Place Order</button>

            </div>
        </>
    )
}

export { CheckOut }