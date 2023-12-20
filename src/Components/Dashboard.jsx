import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://fit-zone-server.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cancel Class!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fit-zone-server.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Canceled!', 'Your class has been canceled.', 'success');
                            const remaining = bookings.filter((booking) => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting:', error);
                        Swal.fire('Error', 'An error occurred while deleting.', 'error');
                    });
            }
        });
    };


    const handleBookingConfirm = id => {
        fetch(`https://fit-zone-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings);
                }

            })

    }



    return (
        <div className="pt-20 bg-black">
            <Helmet>
                <title>Thrive | Dashboard</title>
            </Helmet>
            <div className="flex justify-center items-center pb-8">
                <span className='text-xl md:text-2xl lg:text-4xl font-bold text-amber-400 border-2 border-amber-400 rounded-lg p-2'>Dashboard</span>
            </div>
            <h1 className="text-2xl text-amber-400 text-center"><span className="font-bold">My Bookings :</span> {bookings.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-amber-400">
                            {/* <th>
                                Action
                            </th> */}
                            <th>Action</th>
                            <th>User</th>
                            <th>Classes</th>
                            <th>Fee</th>
                            <th>Class Schedule</th>
                            <th>Booking Date</th>
                            <th>Statues</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboard;