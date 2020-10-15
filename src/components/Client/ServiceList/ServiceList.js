import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);
     useEffect(() => {
         fetch('https://tranquil-beach-52858.herokuapp.com/servicesList/')
         .then(res => res.json())
         .then(data => setServiceList(data))
     }, []);

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Service List</b></h2>
                <div className="jumbotron">
                    <div className="row">
                        {
                            serviceList.map(serviceList => <ServiceListDetails serviceList={serviceList}></ServiceListDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;