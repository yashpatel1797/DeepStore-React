import React from 'react'
import noData from "assest/noData.png";
import { Link } from 'react-router-dom';
import styles from "./EmptyData.module.css"
const EmptyData = () => {
    return (
        <>
            <div className='text-center'>
                <img src={noData} alt="error" className={`${styles["img-responsive"]} img-responsive`} />
                <div className='spacer-2rem'></div>
                <Link to="/products" className='btn btn-outline'>Shop Now</Link>
            </div>
        </>
    )
}

export { EmptyData }