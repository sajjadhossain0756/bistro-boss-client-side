import React from 'react'

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item
  return (
    <div className='flex gap-2 '>
        <img style={{borderRadius: '0 200px 200px 200px'}} src={image} className='w-[90px]' alt="" />
        <div>
            <h2 className='uppercase text-xl '>{name} --------------- </h2>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-600 text-sm'>${price}</p>
    </div>
  )
}

export default MenuItem