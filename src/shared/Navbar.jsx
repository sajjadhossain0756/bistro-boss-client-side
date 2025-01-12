import React, { useContext } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../hooks/useCart'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart] = useCart()

    console.log(user?.displayName)
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                alert('sign out successfull')
                navigate('/login')
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li>
            <Link to='/dashbord/cart'>
                <button className='btn'>
                    <FaShoppingCart className='mr-2'></FaShoppingCart>
                    <div className='badge badge-secondary'>+{cart.length}</div>
                </button>
            </Link>
        </li>

        {user ?
            <>
                <li><Link onClick={handleSignOut}>Logout</Link></li>
            </> :
            <>
                <li><NavLink to='/login'>Login</NavLink></li>
            </>}
    </>
    return (
        <div className=''>
            <div className="navbar fixed max-w-6xl opacity-50 bg-black z-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="font-bold text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">

                    <a className="btn text-black">{user ? user?.displayName : 'dispalyName'}</a>
                    <img src={user && user?.photoURL} alt="" className='h-10 w-10' />
                </div>
            </div>
        </div>
    )
}

export default Navbar