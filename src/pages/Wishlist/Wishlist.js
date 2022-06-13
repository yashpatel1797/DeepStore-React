import React from 'react'
import { Card, EmptyData } from 'components'
import './Wishlist.css'
import { useCart } from 'context'
import { useDocumentTitle } from 'hooks/useDocumentTitle'

const Wishlist = () => {
    const { wishlistItem } = useCart();
    useDocumentTitle("Wishlist")
    return (
        <>
            <h3 className="page-title">My Wishlist ({wishlistItem.length} items)</h3>
            {wishlistItem.length <= 0 ? <EmptyData /> :
                <div className="grid-4-column wishlist">
                    {wishlistItem.map(product => <Card item={product} key={product._id} />)}
                </div>}
        </>
    )
}

export default Wishlist 