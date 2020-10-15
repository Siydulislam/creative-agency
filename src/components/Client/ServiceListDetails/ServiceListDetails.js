import React from 'react';
import '../ServiceList/ServiceList.css';

const ServiceListDetails = ({ serviceList }) => {
    return (
        <div className="col-md-6 serviceListCard">
            {
                serviceList.image ? <img src={`data:image/png;base64,${serviceList.image.img}`} alt=""/>
                :
                <img src={`http://localhost:5000/${serviceList.img}`} style={{width:'20%'}} alt=""/>
            }
            <div className="mt-3">
                <h4><b>{serviceList.title}</b></h4>
                <p>{serviceList.description}</p>
            </div>
        </div>
    );
};

export default ServiceListDetails;