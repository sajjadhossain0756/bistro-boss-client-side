import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import MenuItem from '../../shared/MenuItem'

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === "popular")
            setMenu(popularMenu)
        })
    },[])
    
  return (
    <div>
        <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
            {menu && menu.map(item =><MenuItem key={item._id} item={item}></MenuItem>)}
        </div>
        <div className='flex flex-col justify-center  items-center'>
        <button className='uppercase w-[150px] btn btn-outline border-0 text-gray-500
                         border-gray-900 border-b-4'>View All Menu</button>
        </div>
    </div>
  )
}

export default PopularMenu