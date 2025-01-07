
import SectionTitle from '../../Components/SectionTitle'
import MenuItem from '../../shared/MenuItem'
import useMenu from '../../hooks/useMenu'

const TodaysOffered = () => {
   const [menu] = useMenu()
   const offeredItems = menu.filter(item => item.category === 'offered')

  return (
    <div>
        <SectionTitle
         subHeading={"Don't Miss"}
         heading={"Today's Offer"}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
           {offeredItems && offeredItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
        </div>
        <div className='flex flex-col justify-center  items-center mb-8'>
        <button className='uppercase w-auto btn btn-outline border-0 text-gray-500
                         border-gray-900 border-b-4'>Order Your Favourite Food</button>
        </div>
    </div>
  )
}

export default TodaysOffered