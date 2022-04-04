import React, { useEffect, useState } from 'react'
import { Loader } from ".."
import axios from 'axios'
import { Link } from 'react-router-dom'
import './FeatureCategory.css'
import { useCart } from 'context'

const FeatureCategory = () => {
    const { filterDispatch } = useCart();
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const res = await axios.get("/api/categories")
            setCategory(res.data.categories);
        })()
        setTimeout(() => { setIsLoading(false); }, 1200);
    }, [])
    const categoryHandler = (category) => {
        filterDispatch({ type: "FILTER_BY_CATEGORY", payload: category })
    }
    return (
        <>
            <section className="featured">
                <h2 className="featured-title">Featured category</h2>
                {isLoading ? <Loader /> :
                    <div className="grid-4-column test-text-overlay featured-list">
                        {category.map(item =>
                            <Link
                                to="/products"
                                key={item._id}
                                onClick={() => categoryHandler(item.categoryName)}>
                                <div className="card-vertical">
                                    <div className="overlay-container">
                                        <div className="image-container">
                                            <img
                                                src={item.image}
                                                alt={item.categoryName}
                                                className="card-image category-image"
                                            />
                                        </div>
                                    </div>
                                    <div className="overlay-text">
                                        <div className="text-overlay-name body-cp-lg">{item.categoryName}</div>
                                    </div>
                                </div>
                            </Link>)}
                    </div>}
            </section>
        </>
    )
}

export { FeatureCategory }