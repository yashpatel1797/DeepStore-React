import React from 'react'
import { Card, Filter } from "components"
import { useCart } from "context"
import { filterFunction } from 'utilities'
import "./Products.css"

const Products = () => {
    const { productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery } = useCart()
    const data = filterFunction(productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery)

    return (
        <>
            <div className="spacer-3rem"></div>
            <div className="filter-products">
                <div className="grid-20-80">
                    <Filter />
                    <div className="products">
                        <div className="grid-4-column">
                            {data.map(product => <Card item={product} key={product.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }