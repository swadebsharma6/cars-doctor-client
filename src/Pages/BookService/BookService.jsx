import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {

    const service = useLoaderData();
    const {_id, title, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order ={
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id:_id,
            price: price
    }

    console.log(order);

    // send data to the server
    fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            alert('Service booked successfully')
        }
    })

}

    return (
        <div>
           <h1 className="text-center text-3xl">Book Services: {title}</h1> 
         
            <div className="card-body">
              <form onSubmit={handleBookService}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

               <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" defaultValue={user?.name} placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                </div>
               <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Due Amount</span>
                </label>
                <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                </div>

               </div>

                <div className="form-control mt-6">
                <input  className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
              </form>
             </div>
    </div>
    );
};

export default BookService;