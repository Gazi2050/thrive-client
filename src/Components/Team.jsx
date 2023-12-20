import { NavLink } from "react-router-dom";

const Team = () => {
    return (
        <div className="bg-black pt-16">
            <h1 className="text-4xl text-center text-amber-400 font-bold">Our dedicated trainers</h1>
            <p className="text-center text-white mt-5">Meet Our Expert Trainers at Thrive : Where Passion Meets Purpose.<br /> Unlock your full potential with personalized fitness guidance from our dedicated team.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-5 lg:p-20">
                {/* t-1 */}
                <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt="avatar" />

                    <div className="py-5 text-center">
                        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Brian Mitchell</a>
                        <span className="text-sm text-gray-700 dark:text-gray-200">Certified Personal Trainer</span>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400">Details</button>
                    </div>
                </div>
                {/* t-2 */}
                <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1531518326825-96490ddf2a89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D" alt="avatar" />

                    <div className="py-5 text-center">
                        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Emily Turner</a>
                        <span className="text-sm text-gray-700 dark:text-gray-200">Certified Fitness Instructor and Nutrition Specialist</span>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400">Details</button>
                    </div>
                </div>
                {/* t-3 */}
                <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover w-full h-56" src="https://media.istockphoto.com/id/1210366738/photo/black-and-white-photo-shoot-of-attractive-sad-man.webp?s=170667a&w=0&k=20&c=IEfwWmzlxv-t2HadoP9eq_uv-X5kou8TqAsgvviGofc=" alt="avatar" />

                    <div className="py-5 text-center">
                        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Marcus Rodriguez</a>
                        <span className="text-sm text-gray-700 dark:text-gray-200">CrossFit Level 2 Trainer</span>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400">Details</button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center pb-20">
                <NavLink to={'/trainer'} className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">See More</NavLink>
            </div>
        </div>
    );
};

export default Team;