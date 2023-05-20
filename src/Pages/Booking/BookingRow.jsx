

const BookingRow = ({booking}) => {

    const {customerName, email, date, service, price, img } = booking;

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          
            <div className="avatar">
              <div className="rounded w-14 h-14">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
        </td>
        <td>
         {service}
        </td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default BookingRow;