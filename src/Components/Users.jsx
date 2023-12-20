import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import { FaUser, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
// import { useState } from "react";
const Users = () => {
    // const [Users, setUsers] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: true,
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // const handleDeleteUser = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: 'You won\'t be able to revert this!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Delete User'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://fit-zone-server.vercel.app/users/${id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire('Deleted!', 'User has been deleted.', 'success');
    //                         const remaining = Users.filter((User) => User._id !== id);
    //                         setUsers(remaining);
    //                     }
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error deleting:', error);
    //                     Swal.fire('Error', 'An error occurred while deleting.', 'error');
    //                 });
    //         }
    //     });
    // };

    return (
        <div className="pt-20 bg-black">
            <Helmet>
                <title>Thrive | Users</title>
            </Helmet>
            <div className="flex justify-center items-center pb-8">
                <span className='text-xl md:text-2xl lg:text-4xl font-bold text-amber-400 border-2 border-amber-400 rounded-lg p-2'>All Users</span>
            </div>
            <h1 className="text-2xl text-white text-center font-semibold"><span className="font-bold text-amber-400">Total Users : </span>{users.length}</h1>
            <div>
                <div className="overflow-x-auto text-amber-400">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-amber-400">
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.role === 'admin' ? <button

                                            className="btn  btn-outline btn-sm text-black text-xl bg-amber-400 hover:text-amber-400 hover:bg-black tooltip tooltip-right tooltip-warning hover:border-amber-400" data-tip={user.role}><FaUserShield /></button> :
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-outline btn-sm text-black text-lg bg-amber-400 hover:text-amber-400 hover:bg-black tooltip tooltip-right tooltip-warning hover:border-amber-400" data-tip='User'><FaUser /></button>}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user._id)}
                                            className="btn btn-outline btn-sm text-red-500 text-2xl tooltip tooltip-right tooltip-warning" data-tip="Delete"><MdDeleteForever /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;