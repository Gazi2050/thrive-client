import { Helmet } from "react-helmet-async";

const Chart = () => {
    return (
        <div className="pt-20 bg-black">
            <Helmet>
                <title>Thrive | Users</title>
            </Helmet>
            <div className="flex justify-center items-center pb-8">
                <span className='text-xl md:text-2xl lg:text-4xl font-bold text-amber-400 border-2 border-amber-400 rounded-lg p-2'>User Chart</span>
            </div>
        </div>
    );
};

export default Chart;