import { BiCheck } from "react-icons/bi";
import { CgGym } from "react-icons/cg";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, name, email, classType, trainer, bookingDate, date, fee, status } = booking;



    return (
        <tr className="text-amber-400">
            <th>
                <label>
                    {status === 'confirm' ? <button className=" rounded-full border-2 border-amber-400  text-amber-400 text-3xl p-2"><BiCheck /></button> : <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <CgGym className="text-5xl text-amber-400" />
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {classType}
                <br />
                <span className="badge badge-warning text-black badge-sm">{trainer}</span>
            </td>
            <td>${fee}</td>
            <td>{date}</td>
            <td>{bookingDate}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-accent">Class Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-outline text-amber-400 btn-sm">Confirm Class</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;
