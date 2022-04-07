import { useAddress } from 'context'
import React from 'react'
import { Link } from 'react-router-dom'
const OrderDetails = () => {
    const { orders } = useAddress();
    return (

        <div className='text-center'>
            <div className='spacer-3rem'></div>
            <div className='spacer-3rem'></div>
            <div className='fn-size-l  page-title'>
                Your Order is success full, Product will be delivered in few days.
            </div>
            <div className='spacer-2rem'></div>

            <Link to="/products" className='btn btn-outline'>Shop Now</Link>
        </div>
    )
}

export { OrderDetails }