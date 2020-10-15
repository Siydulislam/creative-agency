import React from 'react';
import './ClientFeedbackDetails.css';

const ClientFeedbackDetails = ({ reviews }) => {
    return (
        <div className="col-md-4 clientFeedback" style={{marginTop:'50px'}}>
            <div className="d-flex justify-content-start">
                {
                    reviews.image ? <img src={`data:image/png;base64,${reviews.image.img}`} alt=""/>
                    :
                    <img src={`http://localhost:5000/${reviews.img}`} alt="" style={{width: '20%'}}/>
                }
                <div className="text-left ml-3">
                    <h5>{reviews.name}</h5>
                    <h6>{reviews.designation}</h6>
                </div>
            </div>
            <p className="text-left">{reviews.description}</p>
        </div>
    );
};

export default ClientFeedbackDetails;