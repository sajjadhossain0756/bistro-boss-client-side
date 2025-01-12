import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaTrash, FaUsers } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} as an admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosSecure.delete(`/users/${id}`)
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
        <div>
            <div className='flex justify-evenly'>
                <h2 className='text-3xl '>Manage All Users</h2>
                <h3 className='text-3xl '>Total Users: {users.length}</h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user, indx) => {
                                return <tr key={user._id}>
                                    <th>{indx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className='btn bg-orange-400' >
                                            <FaUsers className='text-white text-2xl'></FaUsers>
                                        </button>}

                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user._id)} className='btn' >
                                            <FaTrash className='text-red-500'></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users