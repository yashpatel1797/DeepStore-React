import React from 'react'
import { Card, Filter } from "../../components/index"
import { useCart } from "../../context/CartContext"
import filterFunction from '../../utilities/filterFunction'
import "./Products.css"

const Products = (props) => {
    const { cartState: { productsData }, filterState: { sortBy, selectedRating, priceRange, selectedCategory, searchQuery } } = useCart()
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