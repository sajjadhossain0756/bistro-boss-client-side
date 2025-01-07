import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import MenuItem from '../../shared/MenuItem'

const TodaysOffered = () => {
   const [items,setItems] = useState([])

   useEffect(()=>{
      fetch('menu.json')
      .then(res => res.json())
      .then(data =>{
         const offeredItems = data.filter(item => item.category === 'offered')
         setItems(offeredItems)
      })
   },[])
  return (
    <div>
        <SectionTitle
         subHeading={"Don't Miss"}
         heading={"Today's Offer"}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
           {items && items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
        </div>
        <div className='flex flex-col justify-center  items-center mb-8'>
        <button className='uppercase w-auto btn btn-outline border-0 text-gray-500
                         border-gray-900 border-b-4'>Order Your Favourite Food</button>
        </div>
    </div>
  )
}

export default TodaysOffered