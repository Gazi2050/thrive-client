import { Link } from "react-router-dom";

const ClassesCard = ({ classItem }) => {
    const { _id, classType, trainer, date, fee } = classItem;
    return (
        <div>
            <div className="card w-full bg-stone-700 text-amber-400 shadow-xl border-amber-500 border-[1.5px]">
                <span className="badge absolute rounded-lg rounded-tl-xl p-4 bg-black text-amber-400 text-md font-semibold">${classItem.fee}</span>
                <div className="card-body mt-4">
                    <h2 className="card-title">Class: {classItem.classType}</h2>
                    <p>Trainer: {classItem.trainer}</p>
                    <p>Date: {classItem.date}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkOut/${_id}`}>
                            <button className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">CheckOut</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;