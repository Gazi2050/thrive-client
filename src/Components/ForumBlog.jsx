import { Link } from "react-router-dom";

const ForumBlog = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1525026198548-4baa812f1183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-3xl font-bold lg:text-5xl text-amber-400">Explore our community</h1>
                        <p className="mb-5 font-medium text-justify">Elevate Your Fitness Game with Thrive Unleash Your Potential! Join our dynamic community of fitness enthusiasts and experts at Thrive. Engage in empowering conversations, discover cutting-edge workout strategies, and share your fitness triumphs. Thrive is not just a forum; it's your partner in achieving peak fitness and well-being. Transform your life—thrive with us at Thrive!</p>
                        <Link to={'/forums'}>
                            <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400 border-0">Explore Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ForumBlog;