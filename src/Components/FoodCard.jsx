import React from 'react'

const FoodCard = ({item}) => {
    const {image,name,recipe,price} = item || {}
    return (
        <div >
            <div  className="card bg-gray-300 shadow rounded-none">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-none w-full" />
                </figure>
                <p className='bg-black/60 text-white absolute right-2 top-2 py-2 px-4'>${price}</p>
                <div className="p-5 py-8 space-y-2 items-center text-center">
                    
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p>{recipe.substring(0, 60)}</p>
                    <button className="btn btn-outline hover:bg-orange-400 border-0 border-b-4 border-orange-400 uppercase">Add To Card</button>

                </div>
            </div>
        </div>
    )
}

export default FoodCard