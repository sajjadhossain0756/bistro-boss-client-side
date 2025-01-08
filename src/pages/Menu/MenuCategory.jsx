import React from 'react'
import Cover from '../../shared/Cover'
import MenuItem from '../../shared/MenuItem'
import { Link } from 'react-router-dom'

const MenuCategory = ({ img, title, detail, height, item }) => {

    return (
        <div>
            <Cover img={img} title={title} detail={detail} height={height} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
                {item && item.slice(0, 6).map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <Link to={`/order/${title}`}>
                <div className='flex flex-col justify-center  items-center mb-8'>
                    <button className='uppercase w-auto btn btn-outline border-0 text-gray-500
                         border-gray-900 border-b-4'>Order Your Favourite Food</button>
                </div>
            </Link>
        </div>
    )
}

export default MenuCategory