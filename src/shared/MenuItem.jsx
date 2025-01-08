import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../pages/Home/Category'

const MenuItem = ({ item }) => {
  const { name, image, recipe, price,category } = item
  return (
    <div>
      <div className='flex gap-2 '>
        <img style={{ borderRadius: '0 200px 200px 200px' }} src={image} className='w-[90px]' alt="" />
        <div>
          <h2 className='uppercase text-xl '>{name} --------------- </h2>
          <p>{recipe}</p>
        </div>
        <p className='text-yellow-600 text-sm'>${price}</p>
      </div>
    </div>
  )
}

export default MenuItem