import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {
    return (
        <div className="bg-black">
            <div>
                <p className="text-4xl text-center text-amber-400 font-bold">Reviews</p>
                <p className="text-center text-white mt-5">Explore what our valued customers have to say</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 p-5 lg:p-20">
                {/* r-1 */}
                <div className="w-full max-w-md px-8 py-4 mt-7 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww" />
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0"> Fitness Game-Changer!</h2>
                    <p>June 15, 2023</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={4}
                        readOnly
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Thrive has been a game-changer for my fitness journey! The trainers are top-notch, providing personalized workouts that are both challenging and enjoyable. The positive and motivating atmosphere at Thrive keeps me coming back for more. Highly recommend!"</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-amber-500 dark:text-blue-300" role="link">Alex Johnson </a>
                    </div>
                </div>
                {/* r-2 */}
                <div className="w-full max-w-md px-8 py-4 mt-7 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Transformative Wellness</h2>
                    <p>June 18, 2023</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={4}
                        readOnly
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Thrive Gym's holistic approach to fitness sets it apart. The combination of intense workouts with nutrition guidance from Emily Turner has transformed my lifestyle. The results are real, and the community support is exceptional. Thrive truly lives up to its name.</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-amber-500 dark:text-blue-300" role="link">Emily Rodriguez</a>
                    </div>
                </div>
                {/* r-3 */}
                <div className="w-full max-w-md px-8 py-4 mt-7 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">CrossFit Excellence</h2>
                    <p>June 20, 2023</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={3}
                        readOnly
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">As a CrossFit enthusiast, Marcus Rodriguez's classes are phenomenal! Thrive Gym provides a space where I can push my limits and achieve new fitness milestones. The trainers' expertise and the supportive community make it the best gym experience I've had.</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-amber-500 dark:text-blue-300" role="link">Chris Anderson </a>
                    </div>
                </div>
                {/* r-4 */}
                <div className="w-full max-w-md px-8 py-4 mt-7 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Mindful Wellness</h2>
                    <p>June 22, 2023</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={5}
                        readOnly
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Jessica Harper's yoga sessions at Thrive are a sanctuary for mind and body. The gym's commitment to mindfulness sets it apart. I've found peace, flexibility, and a welcoming community here. Thrive Gym is more than just a workout – it's a wellness haven.</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-amber-500 dark:text-blue-300" role="link">Sara Mitchell</a>
                    </div>
                </div>
                {/* r-5 */}
                <div className="w-full max-w-md px-8 py-4 mt-7 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-amber-400 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Elevating Endurance</h2>
                    <p>July 25, 2023</p>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={4}
                        readOnly
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Thrive's Endurance Running program with Jordan Walker has exceeded my expectations. The personalized coaching and varied workouts have significantly improved my stamina. The gym's focus on individual progress and the camaraderie among members make it a standout fitness destination.</p>

                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-lg font-medium text-amber-500 dark:text-blue-300" role="link">Mike Harris</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;