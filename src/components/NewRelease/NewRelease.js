import React from 'react'
import { Card } from '..'
import { useCart } from "context"

const NewRelease = () => {
    const { productsData } = useCart();
    return (
        <>
            <section className="featured">
                <h2 className="featured-title">New Releases</h2>
                <div className="grid-3-column test-text-overlay featured-list">
                    {productsData.map(item => item.new_arrival === "true" && <Card item={item} key={item._id} />)}
                </div>
            </section>
        </>
    )
}

export { NewRelease }