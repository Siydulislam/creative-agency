import React, { useEffect, useState } from 'react';
import ClientFeedbackDetails from '../ClientFeedbackDetails/ClientFeedbackDetails';


const ClientFeedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews/')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <section className="container text-center" style={{marginTop: '100px'}}>
            <h1><b><span style={{color:'#171B4E'}}>Clients</span> <span style={{color:'#7AB259'}}>Feedback</span></b></h1>
            <div className="row">
                {
                    reviews.map(reviews => <ClientFeedbackDetails reviews={reviews}></ClientFeedbackDetails>)
                }
            </div>
        </section>
    );
};

export default ClientFeedback;