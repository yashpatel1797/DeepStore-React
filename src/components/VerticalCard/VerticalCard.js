import React from 'react'
import { useCart, useAuth } from 'context'
import { decreaseCartQuantity, deleteCart, IncreaseCartQuantity, addItemInWishlist } from 'utilities';
import "./VerticalCard.css";

const VerticalCard = ({ item }) => {
    const { token } = useAuth();
    const data = item;
    const { cartDispatch, wishlistDispatch, wishlistItem } = useCart();
    const moveToWishlistHandler = () => {
        if (wishlistItem.find(item => item.id === data.id)) {

        } else {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data })
            addItemInWishlist(data, token)
        }
        cartDispatch({ type: "REMOVE_FROM_CART", payload: data })
        deleteCart(data, token)
    }
    const deleteCartHandler = () => {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: data })
        deleteCart(data, token)
    }
    const increaseQuantityHandler = () => {
        cartDispatch({ type: "INCREASE_CART_QUANTITY", payload: data })
        IncreaseCartQuantity(data, token)
    }

    const decreaseQuantityHandler = () => {
        cartDispatch({ type: "DECREASE_CART_QUANTITY", payload: data })
        decreaseCartQuantity(data, token)
    }
    return (
        <>
            <div className="card-horizontal">
                <div className="image-container">
                    <img src={data.image} alt="card_1" className="card-image" />
                </div>
                <div className="text-container">
                    <div className="text-container-title">
                        <h6>{data.title}</h6>
                    </div>
                    <div className="text-container-desc">
                        <p>by {data.author}</p>
                        <p>
                            Rs. {data.price}
                            <span className="text-container-strike">Rs. {data.original_price}</span>
                            <span>{data.discount}% off</span>
                        </p>
                        <span className="material-icons-round rating"> star_rate </span>
                        <span className="material-icons-round rating"> star_rate </span>
                        <span className="material-icons-round rating"> star_rate </span>
                        <span className="material-icons-round rating"> star_rate </span>
                        <span className="material-icons-round no-rating"> star_border </span>
                        <p></p>
                    </div>
                    <div className="row">
                        <button className="btn btn-icon-only" disabled={data.qty === 1 && "disabled"} onClick={decreaseQuantityHandler}>
                            <span className="material-icons"> remove </span>
                        </button>
                        <span className="fn-size-m">{data.qty}</span>
                        <button className="btn btn-icon-only" onClick={increaseQuantityHandler}>
                            <span className="material-icons"> add </span>
                        </button>
                    </div>
                    <button className="btn btn-solid btn-cta" onClick={deleteCartHandler}>Remove from cart</button>
                    <button className="btn btn-outline btn-cta" onClick={moveToWishlistHandler}>Move to wishlist</button>
                </div>
            </div>
        </>
    )
}

export { VerticalCard }