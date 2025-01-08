import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../shared/Cover'
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import TodaysOffered from './TodaysOffered'
import MenuCategory from './MenuCategory'
import useMenu from '../../hooks/useMenu'

const Menu = () => {
    const [menu] = useMenu()
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' 
            detail='would you like to try a dish from our popular items menu' height='500px'></Cover>
            <TodaysOffered></TodaysOffered>
             {/* dessert category start here */}
            <MenuCategory 
            img={dessertImg} 
            title='dessert' 
            detail='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type'
            height='400px' 
            item={dessertItems} 
             />
             {/* pizza category start here */}
            <MenuCategory 
            img={pizzaImg} 
            title='pizza' 
            detail='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type'
            height='400px' 
            item={pizzaItems} 
             />
             {/* salads category start here */}
            <MenuCategory 
            img={saladImg} 
            title='salads' 
            detail='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type'
            height='400px' 
            item={saladItems} 
             />
             {/* soup category start here */}
            <MenuCategory 
            img={soupImg} 
            title='soup' 
            detail='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type'
            height='400px' 
            item={soupItems} 
             />
        </div>
    )
}

export default Menu