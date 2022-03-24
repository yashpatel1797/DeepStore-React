import React from 'react'
import { Card } from '../../components/index'
import './Wishlist.css'
import { useCart } from '../../context/CartContext'

const Wishlist = () => {
    const { wishlistState: { wishlistItem } } = useCart();
    return (
        <>
            <h3 className="page-title">My Wishlist</h3>
            <div className="grid-4-column wishlist">
                {wishlistItem.map(product => <Card item={product} key={product._id} />)}
            </div>
        </>
    )
}

export { Wishlist }