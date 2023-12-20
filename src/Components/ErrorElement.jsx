import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-center bg-black text-amber-400 h-screen">
            <div>
                <div className="flex justify-center">
                    <img src="/404.png" className="w-[70%] md:w-[45%] lg:w-[25%]" />
                </div>
                <p className="text-xl font-medium">The page you were looking for does't exist</p>
                <p>You may have mistype the address or the page may have moved</p>
            </div>
            <div className="space-x-5 mt-5">
                <Link to={'/'}><span className="btn btn-outline text-amber-400">Home</span></Link>
                <Link to={-1}><span className="btn btn-outline text-amber-400">Go back</span></Link>

            </div>
        </div>
    );
};

export default ErrorElement;