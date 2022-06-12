import React, { useState, useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth, useCart } from 'context'
import './Navbar.css'
const Navbar = () => {
    const { isLogin, firstName, authDispatch } = useAuth();
    const { cartItem, wishlistItem, filterDispatch } = useCart();
    const [toggle, setToggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const logoutHandler = () => {
        localStorage.clear();
        authDispatch({ type: "USER_LOGOUT" })
    }
    useEffect(() => {
        if (pathname !== "/products") {
            setSearchQuery("");
        }
    }, [pathname]);
    useEffect(() => {
        let timer = setTimeout(() => {
            filterDispatch({ type: "FILTER_BY_SEARCH", payload: searchQuery })
            if (pathname !== "/products" && searchQuery) navigate("/products");
        }, 1000)

        return () => timer && clearTimeout(timer)
    }, [filterDispatch, searchQuery]);
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <>
            <nav className={`${toggle ? "active" : ""} nav-bar`}>
                <div className="nav-section">
                    <Link to="/" className='logo-title fn-size-l'>DeepKart</Link>

                </div>
                <div className="nav-search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for product"
                        onChange={handleSearchQuery}
                    />
                </div>
                <div className="nav-hamburger" onClick={() => setToggle(pre => !pre)}>
                    <span className="material-icons"> menu </span>
                </div>
                <div className="nav-user">
                    {!isLogin ?
                        <Link to="/login" className="btn nav-user-btn">
                            <span className="material-icons"> person </span>
                            <span>{"Login"} </span>
                        </Link>
                        :
                        <>
                            <div className='profile-icon'>
                                <Link to="/profile"> <span className=" btn nav-user-btn">
                                    <span className="material-icons"> person </span>
                                    <span>{firstName ? `${firstName}` : "Login"} </span>
                                </span>
                                </Link>
                                {!toggle && <div className='profile-options'>
                                    <Link to="/profile" className='profile-option-title'>Profile</Link>
                                    <Link
                                        to="/login"
                                        className='profile-option-title'
                                        onClick={logoutHandler}>
                                        <span>Logout</span>
                                    </Link>
                                </div>}
                            </div>
                        </>
                    }
                    <span className="nav-notification-icon">
                        <Link to="/wishlist" className="btn nav-user-btn">
                            <span className="material-icons"> favorite </span>
                            {!toggle && wishlistItem.length !== 0 && <span className="num icon-notification">{wishlistItem.length}</span>}
                            <span>Wishlist</span></Link>
                    </span>
                    <span className="nav-notification-icon">
                        <Link to="/cart" className="btn nav-user-btn">
                            <span className="material-icons"> shopping_cart </span>
                            {!toggle && cartItem.length !== 0 && <span className="num icon-notification icon-cart">{cartItem.length}</span>}
                            <span>Cart </span></Link>
                    </span>
                    <span className="nav-notification-icon">
                        <Link to="/products" className="btn nav-user-btn">
                            <span className="material-icons"> shop </span>
                            <span>Shop</span></Link>
                    </span>
                    {isLogin &&
                        <>
                            <span className="nav-notification-icon btn-logout"
                                onClick={logoutHandler}>
                                <span className=" btn nav-user-btn">
                                    <span className="material-icons"> logout </span>
                                    <span>Logout </span>
                                </span>
                            </span>
                        </>}
                </div>
            </nav>
        </>
    )
}

export { Navbar }