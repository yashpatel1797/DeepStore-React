import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './FeatureCategory.css'

const FeatureCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/categories")
            setCategory(res.data.categories);
        })()
    }, [])

    return (
        <>
            <section className="featured">
                <h2 className="featured-title">Featured category</h2>
                <div className="grid-4-column test-text-overlay featured-list">
                    {category.map(item => <Link to="/products" key={item._id}>
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
                </div>
            </section>
        </>
    )
}

export { FeatureCategory }