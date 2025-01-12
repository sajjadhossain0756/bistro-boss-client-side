import React from 'react'
import useAuth from '../hooks/useAuth'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item || {}
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = () => {

        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to cart successfull`,
                            showConfirmButton: false,
                            timer: 1500

                        });
                        //   update the cart items
                        refetch()
                    }
                })
                .catch(err => {
                    console.log(err.message)
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div >
            <div className="card bg-gray-300 shadow rounded-none">
                <figure className="">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-none w-full" />
                </figure>
                <p className='bg-black/60 text-white absolute right-2 top-2 py-2 px-4'>${price}</p>
                <div className="p-5 py-8 space-y-2 items-center text-center">

                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p>{recipe.substring(0, 60)}</p>
                    <button onClick={handleAddToCart} className="btn btn-outline hover:bg-orange-400 border-0 
                    border-b-4 border-orange-400 uppercase">Add To Card</button>

                </div>
            </div>
        </div>
    )
}

export default FoodCard