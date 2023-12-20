import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const CheckOut = () => {
    const checkout = useLoaderData();
    const { classType, trainer, _id, fee, date } = checkout;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleBookClass = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const classType = form.classType.value;
        const trainer = form.trainer.value;
        const date = form.date.value;
        const bookingDate = form.bookingDate.value;
        const fee = form.fee.value;
        const booking = { name, email, classType, trainer, date, bookingDate, fee };
        console.log(booking);


        fetch('https://fit-zone-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Class book successfully')
                    navigate('/classes');
                }
            })

    };

    return (
        <div className="pt-20 bg-black">
            <div>
                <h1 className="text-amber-400 text-xl lg:text-4xl md:text-3xl text-center font-bold">CheckOut</h1>
            </div>
            <div className="py-7 bg-black ">
                <section className="max-w-4xl p-6 mx-auto bg-amber-100 rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white text-center">Confirm Class</h2>
                    <p><span className="font-bold">Class :</span>  {classType}</p>
                    <p><span className="font-bold">Trainer :</span> {trainer}</p>
                    <p><span className="font-bold">Class Schedule :</span> {date}</p>

                    <form onSubmit={handleBookClass}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Name</label>
                                <input required defaultValue={user?.displayName} type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Email</label>
                                <input required defaultValue={user?.email} type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Booking Date</label>
                                <input required type="date" name="bookingDate" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Fee</label>
                                <input required defaultValue={fee} type="text" name="fee" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Class</label>
                                <input required defaultValue={classType} type="text" name="classType" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Trainer</label>
                                <input required defaultValue={trainer} type="text" name="trainer" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Class Schedule</label>
                                <input required defaultValue={date} type="text" name="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button type="submit" className="btn px-8 py-2.5 leading-5 text-white bg-gray-700 rounded-md hover:bg-gray-900">Join</button>
                        </div>
                        <Toaster />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CheckOut;