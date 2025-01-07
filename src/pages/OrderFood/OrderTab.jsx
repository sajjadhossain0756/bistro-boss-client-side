import React from 'react'
import FoodCard from '../../Components/FoodCard'

const OrderTab = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
            {items && items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
        </div>
    )
}

export default OrderTab