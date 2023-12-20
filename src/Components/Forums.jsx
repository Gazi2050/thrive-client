import { Helmet } from "react-helmet-async";


const Forums = () => {
    return (
        <div className="bg-black">
            <Helmet>
                <title>Thrive | Forums</title>
            </Helmet>
            <div className="text-amber-400">
                <p className='text-xl md:text-2xl lg:text-4xl font-bold text-center pt-20 '>Our community</p>
                <p className="text-sm text-center pt-3 ">Welcome to Thrive – the ultimate fitness community! Join us to connect with like-minded individuals, share your fitness journey, and celebrate victories together. At Thrive, we believe in the power of community to inspire and empower your path to a healthier, happier you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-5 lg:p-20 text-amber-400">
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMGJsb2d8ZW58MHx8MHx8fDA%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Energize Life: Unleashing Your Inner Athlete</h2>
                        <p>Discover a world of fitness wonders with Energize Life! From workout tips to nutritional advice, embark on a journey to unlock your true athletic potential and revitalize your lifestyle.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sculpt & Soar: Fitness for Mind and Body Harmony</h2>
                        <p>Sculpt & Soar is your guide to achieving holistic wellness. Dive into our blog for invigorating workouts, mindfulness practices, and nutrition insights, creating a balanced approach to a healthier, more vibrant you.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Peak Performance Pursuit: Elevate Your Fitness Game</h2>
                        <p>Join us at Peak Performance Pursuit for expert training strategies, inspirational success stories, and the latest trends in fitness technology. Elevate your workouts, set new goals, and conquer your fitness peaks!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">FitFuel Chronicles: Nourishing Your Body, Igniting Your Workout</h2>
                        <p>At FitFuel Chronicles, we explore the intersection of nutrition and fitness. Uncover delicious recipes, dietary tips, and expert insights to fuel your body, enhance your workouts, and achieve lasting health.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://plus.unsplash.com/premium_photo-1698091419158-fdcb51ddd405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Grit & Grace Fitness: Empowering Women in Wellness</h2>
                        <p>Grit & Grace Fitness is dedicated to empowering women on their fitness journeys. From strength training to mental resilience, our blog provides valuable resources to inspire and support women in achieving their fitness goals.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1578762560042-46ad127c95ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Adventures in Wellness: A Fitness Explorer's Journal</h2>
                        <p>Embark on Adventures in Wellness, where fitness meets exploration. Dive into our blog for travel-inspired workouts, outdoor fitness tips, and stories that will ignite your adventurous spirit on the path to a healthier lifestyle.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://plus.unsplash.com/premium_photo-1670505060574-b08479270d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mindful Muscle: Building Strength from the Inside Out</h2>
                        <p>Mindful Muscle is your destination for fitness with a focus on mindfulness. Explore articles on meditation, mindful workouts, and holistic fitness practices to build strength not just in your body, but in your mind and soul.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Urban Fitness Fusion: Blending Workouts with City Living</h2>
                        <p>Urban Fitness Fusion is where city dwellers find their perfect workout blend. Dive into our blog for quick urban workouts, wellness hacks for busy schedules, and tips on seamlessly integrating fitness into your urban lifestyle.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full bg-zinc-700 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thriving at Any Age: Fitness for Every Life Stage</h2>
                        <p>Join us on a journey of lifelong fitness at Thriving at Any Age. From youth to seniors, our blog provides tailored workouts, wellness advice, and inspiring stories, ensuring that fitness is accessible and enjoyable at every stage of life.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forums;