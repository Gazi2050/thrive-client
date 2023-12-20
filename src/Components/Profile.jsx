import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center items-center pt-12  bg-black ">
            <div className="w-full max-w-md px-8 py-10 mt-16 mb-5 bg-slate-100 rounded-lg shadow-lg dark:bg-gray-800 border-4  border-amber-400">
                <div className="flex justify-center -mt-12 md:justify-center">
                    <img className="object-cover w-24 h-24 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user.photoURL || 'https://cdn-icons-png.flaticon.com/128/64/64572.png'} />
                </div>
                <h2 className="m-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"><span className="font-bold">User Name :</span> {user.displayName}</h2>
                <h2 className="m-2 text-md lg:text-xl md:text-xl font-semibold text-gray-800 dark:text-white md:mt-0"><span className="font-bold">Email :</span> {user.email}</h2>
            </div>
        </div>
    );
};

export default Profile;