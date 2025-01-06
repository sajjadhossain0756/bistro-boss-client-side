import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'

const Recommend = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 3)))
    }, [])
    return (
        <div className='py-10'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'Chef Recommends'}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6'>
                {items && items.map(item => <div key={item._id} className="card bg-gray-300 shadow rounded-none">
                    <figure className="">
                        <img
                            src={item.image}
                            alt="Shoes"
                            className="rounded-none w-full" />
                    </figure>
                    <div className="p-5 py-8 space-y-2 items-center text-center">
                        <h2 className="text-3xl font-semibold">{item.name}</h2>
                        <p>{(item.recipe).substring(0, 60)}</p>
                        <button className="btn btn-outline border-0 border-b-4 border-orange-400 uppercase">Add To Card</button>

                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Recommend