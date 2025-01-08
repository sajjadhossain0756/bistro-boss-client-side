import React, { useState } from 'react'
import coverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const categoryItems = ['salads','pizza','soup','dessert','drinks'];
    const {category} = useParams()
    const initialIndex = categoryItems.indexOf(category)
    console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const dessertItems = menu.filter(item => item.category === 'dessert')
    const pizzaItems = menu.filter(item => item.category === 'pizza')
    const saladItems = menu.filter(item => item.category === 'salad')
    const soupItems = menu.filter(item => item.category === 'soup')
    const drinkItems = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover
                img={coverImg}
                title='Order Food'
                detail='It provides a seamless, user-friendly experience for convenient meal ordering'
                height='500px'></Cover>
            <div className='my-10 '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='flex items-center justify-center'>
                        <TabList>
                            <Tab>Salads</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderTab items={saladItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzaItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soupItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessertItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinkItems}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default OrderFood