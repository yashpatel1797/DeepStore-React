import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth, useCart } from 'context'
import './Navbar.css'
const Navbar = () => {
    const { isLogin, firstName, authDispatch } = useAuth();
    const { cartItem, wishlistItem, filterDispatch } = useCart();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        authDispatch({ type: "USER_LOGOUT" })
    }
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-section">
                    <Link to="/" className='logo-title fn-size-l'>DeepKart</Link>
                </div>
                <div className="nav-search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for product"
                        onChange={(e) => filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}
                    />
                    <Link to="/products" className="btn btn-search">

                        <span className="material-icons"> search </span>
                    </Link>
                </div>
                <div className="nav-hamburger">
                    <span className="material-icons"> menu </span>
                </div>
                <div className="nav-user">
                    <Link to="/login" className="btn nav-user-btn">
                        <span className="material-icons"> person </span>
                        <span>{firstName ? `Hi ${firstName}` : "Login"} </span></Link>
                    <span className="nav-notification-icon">
                        <Link to="/wishlist" className="btn nav-user-btn">
                            <span className="material-icons"> favorite </span>
                            <span className="num icon-notification">{wishlistItem.length}</span>
                            <span>Wishlist</span></Link>
                    </span>
                    <span className="nav-notification-icon">
                        <Link to="/cart" className="btn nav-user-btn">
                            <span className="material-icons"> shopping_cart </span>
                            <span className="num icon-notification icon-cart">{cartItem.length}</span>
                            <span>Cart</span></Link>
                    </span>
                    {isLogin &&
                        <Link to="/login" className="btn nav-user-btn" onClick={logoutHandler}>
                            <span className="material-icons" >
                                logout
                            </span>
                            <span>Logout</span>
                        </Link>
                    }
                </div>
            </nav>
        </>
    )
}

export { Navbar }