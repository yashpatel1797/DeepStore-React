import React, { useState } from 'react'
import { Card, EmptyData, Filter } from "components"
import { useCart } from "context"
import { filterFunction } from 'utilities'
import styles from "./Products.module.css"
import { useDocumentTitle } from 'hooks/useDocumentTitle'

const Products = () => {
    const [toggle, setToggle] = useState(false);
    const { productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery } = useCart()
    const data = filterFunction(productsData, sortBy, selectedRating, priceRange, selectedCategory, searchQuery)
    useDocumentTitle("Products")
    return (
        <>
            <div className={`${toggle ? "active" : ""} filter-products`}>
                <div className={`${styles["grid-20-80"]} grid-20-80`}>
                    <Filter setToggle={setToggle} />
                    <div className="products">
                        {data.length <= 0 ? <EmptyData /> :
                            <div className={`${styles["grid-4-column"]} grid-4-column`}>
                                {data.map(product => <Card item={product} key={product.id} />)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }