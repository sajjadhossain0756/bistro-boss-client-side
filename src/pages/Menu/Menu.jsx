import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../shared/Cover'
import menuImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' detail='would you like to try a dish from our popular items menu' height='500px'></Cover>
        </div>
    )
}

export default Menu