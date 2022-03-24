import React, { useReducer } from 'react'
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthenticationContext"
import { Link, useNavigate } from "react-router-dom";
import { addItemInWishlist, updateCart, removeItemFromWishlist } from '../../utilities/helpers/http-helper';

const Card = (props) => {

    const { authState: { token, isLogin } } = useAuth();
    const data = props.item
    const navigate = useNavigate()
    const { cartState: { cartItem }, addToCart, cartState, cartDispatch, wishlistState: { wishlistItem }, wishlistDispatch } = useCart();
    const addToCartHandler = () => {
        if (isLogin) {
            cartDispatch({ type: "ADD_TO_CART", payload: data })
            updateCart(data, token);
        } else {
            navigate("/login")
        }
    }
    const addWishlistHandler = () => {
        if (isLogin) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data })
            addItemInWishlist(data, token)
        } else {
            navigate("/login")
        }
    }
    const removeWishlistHandler = () => {
        if (isLogin) {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data })
            removeItemFromWishlist(data, token)
        } else {
            navigate("/login")
        }
    }
    return (
        <>
            <div className="card-vertical">
                <div className="image-container">
                    <img
                        src={data.image}
                        alt=""
                        className="card-image"
                    />
                    {data.best_selling === "true" && <span className="card-badge"> Best Selling</span>}
                    {data.new_arrival === "true" && <span className="card-badge"> New Arrival</span>}

                </div>
                <div className="text-container">
                    <div className="text-container-title">
                        <h3>{data.title}</h3>
                        {wishlistItem.some((item) => item.id === data.id) ? (
                            <button className="btn btn-icon-only" onClick={removeWishlistHandler}>
                                <span className="material-icons"> favorite </span>
                            </button>
                        ) : (
                            <button className="btn btn-icon-only" onClick={addWishlistHandler}>
                                <span className="material-icons"> favorite_border </span>
                            </button>
                        )
                        }
                    </div>
                    <div className="text-container-desc">
                        <p>by {data.author}</p>
                        <p>
                            Rs. {data.price}<span className="text-container-strike">Rs. {data.original_price}</span>
                            <span>{data.discount}% off</span>
                        </p>
                    </div>
                    {cartItem.some((item) => item.id === data.id) ? (
                        <Link to="/cart">
                            <button className="btn btn-solid btn-icon-center" to="/cart">
                                <span className="material-icons"> save </span>Go to Cart
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-solid btn-icon-center" onClick={addToCartHandler}>
                            <span className="material-icons"> save </span>Add to cart
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export { Card }