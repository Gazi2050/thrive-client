import { FaPeopleGroup } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdGroups3 } from "react-icons/md";
const Featured = () => {
    const iconStyle = {
        color: "black",
        transition: "color 0.3s",
    };

    const containerStyle = {
        border: "1px solid black",
        textAlign: "center",
        borderRadius: "0.5rem",
        padding: "1rem",
        transition: "border-color 0.3s, background-color 0.3s",
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.style.backgroundColor = "black";
        event.currentTarget.style.color = "#fbbf24";
        event.currentTarget.style.borderColor = "#fbbf24";
        event.currentTarget.querySelector(".icon").style.color = "#fbbf24";
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.backgroundColor = "transparent";
        event.currentTarget.style.color = "black";
        event.currentTarget.style.borderColor = "black";
        event.currentTarget.querySelector(".icon").style.color = "black";
    };

    return (
        <div className="py-20 px-7 bg-slate-400">
            <div className="text-center space-y-5">
                <h3 className="text-amber-400 font-bold">Core Features</h3>
                <h1 className="text-2xl font-bold lg:text-4xl">Elevate Your Fitness Journey with  <span className="text-amber-400">Thrive</span></h1>
                <p className="text-base lg:text-xl font-medium">We provide top-notch fitness training guided by expert trainers. </p>
            </div>
            <div className="md:flex md:space-x-3 md:space-y-0 lg:flex justify-center items-center space-y-3 lg:space-x-3 mt-10">
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaPeopleGroup className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Expert Trainers</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaDumbbell className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Variety of Workouts</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaHandHoldingHeart className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Nutritional Support</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FaChartLine className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Progress Tracking</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <GiWeightLiftingUp className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Specialized Classes</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <MdGroups3 className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Supportive Community</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;