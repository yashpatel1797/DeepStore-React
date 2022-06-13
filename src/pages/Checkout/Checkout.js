import { useAddress, useAuth, useCart } from 'context'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Checkout.module.css"
import { v4 as uuid } from "uuid"
import { useDocumentTitle } from 'hooks/useDocumentTitle'
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

    useDocumentTitle("Checkout");
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
            {cartItem.map(({ title, qty, _id, description, price, image }) =>
                <Link to={`/products/${_id}`} key={_id}
                    className={styles["product-details"]}>
                    <img src={image}
                        alt={title}
                        className={styles["product-image"]}
                    />
                    <div className={styles["order-details"]} >
                        <div>
                            <p className={`${styles["order-title"]} fn-weight-m fn-size-m`}>{title}</p>
                            <p className={styles["order-desc"]}>{description}</p>
                        </div>
                        <div>
                            <span className='fn-size-m'>Quantity : {qty}, </span>
                            <span className='fn-size-m'>Price: {price}</span>
                        </div>
                    </div>
                </Link>
            )}
            <h2>Delivery Address</h2>
            <div className={`${styles["delivery-details"]}`}>
                <p>{address?.firstName}, {address?.home},</p>
                <p>{address?.state} - {address?.pinCode}, {address?.country}</p>
                <p>Mobile : {address?.mobileNumber}</p>
            </div>
            <div>
                <div className={`${styles["price-details"]} fn-size-m`}>
                    <span>Price </span>
                    <span>{(totalPrice.sum).toFixed(2)}</span>
                </div>
                <div className={`${styles["price-details"]} fn-size-m`}>
                    <span>Discount</span>
                    <span> {(totalPrice.discount).toFixed(2)}</span>
                </div>
                <div className={`${styles["price-details"]} fn-size-m`}>
                    <span>Delivery Charges</span>
                    <span> {(deliveryCharges).toFixed(2)}</span>
                </div>
                {coupon && <div className={`${styles["price-details"]} fn-size-m`}><span>Coupon</span><span> {coupon}</span></div>}
                <div className={`${styles["price-details"]} fn-size-m`}>
                    <span>Total Amount</span>
                    <span> {(priceAfterCoupon).toFixed(2)}</span>
                </div>
            </div>
            <button className='btn btn-solid' onClick={displayRazorpay}>Order</button>
        </div >
    )
}

export default Checkout 