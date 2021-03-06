import React from 'react'
import './BestSelling.css'
import { Card } from '..'
import { useCart } from "context"

const BestSelling = () => {
    const { productsData } = useCart();
    return (
        <>
            <section className="featured">
                <h2 className="featured-title">Best selling</h2>
                <div className="grid-3-column test-text-overlay featured-list">
                    {productsData.map(item => item.best_selling === "true" && <Card item={item} key={item._id} />)}
                </div>
            </section >
        </>
    )
}

export { BestSelling }