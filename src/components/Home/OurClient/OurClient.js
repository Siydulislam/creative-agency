import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const OurClient = () => {
    return (
        <section className="container d-flex justify-content-between mb-5" style={{marginTop:'100px'}}>
            <div><img src={airbnb} alt="" style={{width:'60%'}}/></div>
            <div><img src={google} alt="" style={{width:'60%'}}/></div>
            <div><img src={netflix} alt="" style={{width:'60%'}}/></div>
            <div><img src={slack} alt="" style={{width:'60%'}}/></div>
            <div><img src={uber} alt="" style={{width:'60%'}}/></div>
        </section>
    );
};

export default OurClient;