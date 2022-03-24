import React from 'react';
import { useCart } from '../../context/CartContext';
import './Filter.css'

const Filter = () => {
    const { filterDispatch, cartState: { productsData }, filterState: { sortBy, selectedRating, priceRange, selectedCategory } } = useCart()
    return (
        <>
            <div className="filter-hamburger">
                <span className="material-icons"> filter_alt </span>
            </div>
            <div className="filter">
                <div className="filter-title">
                    <button className="btn">Filter</button>
                    <button className="btn btn-link" onClick={() => filterDispatch({ type: "RESET_ALL_FILTERS" })}>Clear</button>
                </div>
                <h2>Category</h2>
                <ul className="filter-category list-spaced list-checkbox fn-size-m">
                    <li>
                        <label className="list-label">
                            <input type="checkbox" name="category" onChange={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Biography" })} checked={selectedCategory.includes("Biography")} />Biography
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="checkbox" name="category"
                                onChange={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Fiction" })} checked={selectedCategory.includes("Fiction")} />Fiction
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="checkbox" name="category" onChange={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Finances" })} checked={selectedCategory.includes("Finances")} />Finances
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="checkbox" name="category" onChange={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Self-Help" })} checked={selectedCategory.includes("Self-Help")} />Self-Help
                        </label>
                    </li>
                </ul>
                <div className="line"></div>
                <h2>Rating</h2>
                <ul className="list-spaced list-radio fn-size-m">
                    <li>
                        <label className="list-label">
                            <input type="radio" name="list-radio" onChange={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 4 })} checked={selectedRating === 4} />4 Stars & above
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="radio" name="list-radio" onChange={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 3 })} checked={selectedRating === 3} />3 Stars & above
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="radio" name="list-radio" onChange={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 2 })} checked={selectedRating === 2} />2 Stars & above
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="radio" name="list-radio" onChange={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 1 })} checked={selectedRating === 1} />1 Stars & above
                        </label>
                    </li>
                </ul>
                <div className="line"></div>
                <h2>Sort by</h2>
                <ul className="list-spaced list-radio fn-size-m">
                    <li>
                        <label className="list-label">
                            <input type="radio" name="sort-by-price"
                                checked={sortBy === "LOW_TO_HIGH"}
                                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })} />Price - Low to
                            High
                        </label>
                    </li>
                    <li>
                        <label className="list-label">
                            <input type="radio" name="sort-by-price"
                                checked={sortBy === "HIGH_TO_LOW"}
                                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })} />Price - High to
                            Low
                        </label>
                    </li>
                </ul>
                <div className="line"></div>
                <h2>Price</h2>
                <label htmlFor="slider">
                    <input
                        type="range"
                        value={priceRange}
                        onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value })}

                        min={50}
                        max={1000}
                    />
                </label>
            </div>
        </>
    )
}

export { Filter }