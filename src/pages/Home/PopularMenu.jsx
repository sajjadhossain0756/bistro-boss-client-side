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
    </div>
  )
}

export default PopularMenu