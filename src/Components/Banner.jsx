import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-3xl font-bold lg:text-5xl">Welcome to <span className="text-yellow-400">Thrive</span></h1>
                        <p className="mb-5 font-medium text-justify">Your Fitness Journey Starts Now! Track workouts, set goals, and join a community dedicated to your wellness. Thrive with us – your best self awaits</p>
                        <Link to={'/classes'}>
                            <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400 border-0">Get Started</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;