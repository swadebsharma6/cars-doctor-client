import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl text-center">Your Bookings: {bookings.length}</h2>
            <div>
            <div className="overflow-x-auto w-full">
     <table className="table w-full">
    {/* head */}
      <thead>
       <tr>
          <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
         </th>
            <th>Picture</th>
             <th>Name</th>
             <th>Email</th>
             <th>Date</th>
            <th>Price</th>
            <th>Details</th>
            <th></th>
         </tr>
      </thead>
          <tbody>
           {

            bookings.map(booking =><BookingRow
            key={booking._id}
            booking={booking}
            ></BookingRow> )

           }
      
          </tbody>
   
    
           </table>
          </div>
            </div>
        </div>
    );
};

export default Booking;