import React from 'react'
import { FaAddressBook, FaAddressCard, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUtensils } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

const Dashbord = () => {
    const isAdmin = true;

    return (
        <div className='flex w-full gap-4 m-5'>
            <div className='w-64 bg-orange-400'>
                <ul className="menu">
                    {isAdmin ? <>
                        <li><NavLink to='/dashbord/adminHome'>
                            <FaHome></FaHome>
                            Admin Home
                        </NavLink></li>
                        <li><NavLink to='/dashbord/addItem'>
                            <FaUtensils></FaUtensils>
                            Add Items
                        </NavLink></li>
                        <li><NavLink to='/dashbord/manageItems'>
                            <FaList></FaList>
                            Manage Items
                        </NavLink></li>
                        <li><NavLink to='/dashbord/manageBookings'>
                            <FaBook></FaBook>
                            Manage Bookings
                        </NavLink></li>
                        <li><NavLink to='/dashbord/users'>
                            <FaList></FaList>
                            Manage Users
                        </NavLink></li>
                    </> :
                        <>
                            <li><NavLink to='/dashbord/userHome'>
                                <FaHome></FaHome>
                                User Home
                            </NavLink></li>
                            <li><NavLink to='/dashbord/cart'>
                                <FaShoppingCart></FaShoppingCart>
                                My cart
                            </NavLink></li>
                            <li><NavLink to='/dashbord/reservation'>
                                <FaCalendar></FaCalendar>
                                Reservation
                            </NavLink></li>
                            <li><NavLink to='/dashbord/reservation'>
                                <FaAddressBook></FaAddressBook>
                                Review
                            </NavLink></li>
                            <li><NavLink to='/dashbord/reservation'>
                                <FaList></FaList>
                                My Bookings
                            </NavLink></li>
                        </>}
                    {/* shared navbar */}
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>
                    <li><NavLink to='/menu'>
                        <FaAddressCard></FaAddressCard>
                        Menu
                    </NavLink></li>
                </ul>
            </div>
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashbord