import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <section className="mt-5">
            <div className="row">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-md-6">
                           <div className="ml-5">
                                <h1><b>Let's Grow Your</b></h1>
                                <h1><b>Brand To The</b></h1>
                                <h1><b>Next Level</b></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam voluptatibus itaque aperiam, harum facilis natus voluptatum voluptatem nisi, nam cumque. Molestias sapiente optio incidunt.</p>
                                <button className="btn btn-dark">Hire Us</button>
                           </div>
                        </div>
                        <div className="col-md-6">
                            <img className="w-75 ml-5" src={frame} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;