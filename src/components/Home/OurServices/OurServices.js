import React, { useEffect, useState } from 'react';
import OurServicesDetails from '../OurServicesDetails/OurServicesDetails';

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <section className="container text-center" style={{marginTop:'100px'}}>
            <h1><b><span style={{color:'#171B4E'}}>Provide awesome</span> <span style={{color:'#7AB259'}}>services</span></b></h1>
            <div  className="row">
                {
                    services.map(services => <OurServicesDetails services={services}></OurServicesDetails>)
                }
            </div>
        </section>
    );
};

export default OurServices;