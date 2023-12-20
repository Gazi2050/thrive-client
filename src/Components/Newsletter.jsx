
const Newsletter = () => {
    return (
        <div className="bg-black pb-10 pt-10">
            <div className="text-center p-7 space-y-5">
                <h1 className="text-4xl font-bold text-amber-400">Want to get updates</h1>
                <h1 className="text-white">Fill out this form if you would like to receive updates about our website</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="border p-5 lg:p-16 m-5 rounded-lg space-y-5">
                    <div>
                        <label className="label">
                            <span className="label-tex font-semibold text-amber-300">Name</span>
                        </label>
                        <input type="text" placeholder="Type Your Name" className="input input-warning input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-tex font-semibold text-amber-300">Email</span>
                        </label>
                        <input type="email" placeholder="Type Your Email" className="input input-warning input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn btn-sm md:btn-md lg:btn-md  text-amber-400 bg-black hover:text-black hover:bg-amber-400">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;