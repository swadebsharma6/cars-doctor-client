import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
            console.log(data);
        })
    }, [])

    return (
        <div className="py-5 mt-4">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-orange-600">Service</h2>
                <h1 className="text-5xl font-semibold">Our Service Area</h1>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised  <br />words which do not look even slightly believable. </p>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               }
               </div>
        </div>
    );
};

export default Services;