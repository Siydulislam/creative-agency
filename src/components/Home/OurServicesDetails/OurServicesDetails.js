import React from 'react';
import { useHistory } from 'react-router-dom';
import './OurServicesDetails.css';

const OurServicesDetails = ({ services }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/order')
    }
    return (
        <div className="col-md-4 ourServices" style={{cursor:'pointer'}} onClick={handleClick}>
            {
                services.image ? <img src={`data:image/png;base64,${services.image.img}`} alt=""/>
                :
                <img src={`https://tranquil-beach-52858.herokuapp.com/${services.img}`} style={{width:'20%'}} alt=""/>
            }
            <div className="mt-3">
                <h4><b>{services.title}</b></h4>
                <p>{services.description}</p>
            </div>
        </div>
    );
};

export default OurServicesDetails;