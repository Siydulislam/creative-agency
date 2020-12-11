import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([]);
    const [isCancelled, setIsCancelled] = useState(false);
    const { loggedInUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
         fetch("https://tranquil-beach-52858.herokuapp.com/getOrders?email=" + loggedInUser.email)
         .then(res => res.json())
         .then(data => {
             setServiceList(data);
             setLoading(false);
         });
     }, [loggedInUser.eamil, isCancelled]);

     const handleCancel = id => {
         setLoading(true);
         fetch("https://tranquil-beach-52858.herokuapp.com/cancelOrder/" + id, {
             method: "DELETE"
         })
         .then (res => res.json())
         .then(data => {
             if (data) {
                 setIsCancelled(true);
             }
         });
     };

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2><b>Service List</b></h2>
                    </div>
                    <div>
                        <h4><b>{loggedInUser.name}</b></h4>
                    </div>
                </div>
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