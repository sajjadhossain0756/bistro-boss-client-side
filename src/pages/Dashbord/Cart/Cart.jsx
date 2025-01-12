import React from 'react'
import useCart from '../../../hooks/useCart'
import { FaTrash } from 'react-icons/fa'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const Cart = () => {
    const [cart,refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0)

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    }
                })


        });
    }
    return (
        <div >
            <div className='flex justify-evenly'>
                <h2 className='text-3xl font-semibold'>Total Items: {cart.length}</h2>
                <h2 className='text-3xl font-semibold'>Total Price: {totalPrice.toFixed(2)}</h2>
                <button className='btn bg-orange-300'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map((item, index) => {
                            {/* row 1 */ }
                            return <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img src={item?.image} className='h-10 w-10' alt="" />
                                </td>
                                <td>{item?.name}</td>
                                <td>{item?.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item._id)} className='btn'>
                                        <FaTrash className='text-red-500'></FaTrash>
                                    </button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart