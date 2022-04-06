import { useCart, useAuth } from 'context';
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { addItemInWishlist, updateCart, removeItemFromWishlist } from 'utilities';

import "./SingleProduct.css"

const SingleProduct = () => {
    const { token, isLogin } = useAuth();
    const { productId } = useParams();
    const { productsData, cartDispatch, cartItem, wishlistItem, wishlistDispatch } = useCart();
    const navigate = useNavigate()
    const product = productsData.find(item => item._id === productId)
    const addToCartHandler = () => {
        if (isLogin) {
            cartDispatch({ type: "ADD_TO_CART", payload: product })
            updateCart(product, token);
        } else {
            navigate("/login")
        }
    }
    const addWishlistHandler = () => {
        if (isLogin) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
            addItemInWishlist(product, token)
        } else {
            navigate("/login")
        }
    }
    const removeWishlistHandler = () => {
        if (isLogin) {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
            removeItemFromWishlist(product, token)
        } else {
            navigate("/login")
        }
    }
    return (
        <div className="grid-50-50 product-container">
            <div>
                <img className="img-responsive card-image" src={product.image} alt={product.title} />
            </div>
            <div className="text-container">
                <h1 className='fn-weight-l'>{product.title}</h1>
                <p>by {product.author}</p>
                <div className='spacer-3rem'></div>
                <div className="text-container-desc">

                    <p>{product.description}</p>
                    <div className='spacer-3rem'></div>

                    <p>Rs. {product.price}<span className="text-container-strike">Rs. {product.original_price}</span>
                        <span>{product.discount}% off</span></p>
                </div>
                <div className='spacer-3rem'></div>

                <div className='btn-container'>
                    {cartItem.some((item) => item.id === product.id) ? (
                        <Link to="/cart">
                            <button className="btn btn-solid btn-icon-center">
                                <span className="material-icons"> save </span>Go to Cart
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-solid btn-icon-center" onClick={addToCartHandler}>
                            <span className="material-icons"> save </span>Add to cart
                        </button>
                    )}
                    {wishlistItem.some((item) => item.id === product.id) ? (
                        <button
                            className="btn btn-outline btn-icon-center"
                            onClick={removeWishlistHandler}>
                            <span className="material-icons">  favorite      </span>Remove from playlist
                        </button>) : (
                        <button
                            className="btn btn-outline btn-icon-center"
                            onClick={addWishlistHandler}>
                            <span className="material-icons">  favorite      </span>Save to wishlist
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export { SingleProduct }