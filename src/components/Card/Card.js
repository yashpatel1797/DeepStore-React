import React, { useReducer } from 'react'
import { useCart, useAuth } from "context"
import { Link, useNavigate } from "react-router-dom";
import { addItemInWishlist, updateCart, removeItemFromWishlist } from 'utilities';
import styles from "./Card.module.css"

const Card = (props) => {

    const { token, isLogin } = useAuth();
    const data = props.item
    const navigate = useNavigate()
    const { cartItem, cartDispatch, wishlistItem, wishlistDispatch } = useCart();
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
                    <Link to={`/products/${data._id}`} ><img
                        src={data.image}
                        alt={data.title}
                        className="card-image"
                    /></Link>
                    {data.best_selling === "true" && <span className="card-badge"> Best Selling</span>}
                    {data.new_arrival === "true" && <span className="card-badge"> New Arrival</span>}
                    <span className={`${styles["card-badge"]} card-badge `}>{data.rating.rate} <span className='material-icons fn-size-xs'>star</span></span>
                </div>
                <div className="text-container">
                    <div className={`${styles["text-container-title"]} text-container-title`}>
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
                            <span className='fn-weight-m fn-size-m'>Rs. {data.price}</span>
                            <span className="text-container-strike">Rs. {data.original_price}</span>
                            <span className={styles.discount}>{data.discount}% off</span>
                        </p>
                    </div>
                    {cartItem.some((item) => item.id === data.id) ? (
                        <Link to="/cart">
                            <button className={`${styles["btn-icon-center"]} btn btn-solid btn-icon-center`} to="/cart">
                                <span className="material-icons">  shopping_cart  </span>Go to Cart
                            </button>
                        </Link>
                    ) : (
                        <button className={`${styles["btn-icon-center"]} btn btn-solid btn-icon-center`} onClick={addToCartHandler}>
                            <span className="material-icons">  shopping_cart  </span>Add to cart
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export { Card }