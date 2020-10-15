import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const Order = () => {
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newOrder = {...order};
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleOrder = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('projectName', order.projectName);
        formData.append('projectDetails', order.projectDetails);
        fetch('http://localhost:5000/orders/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Order</b></h2>
                <div className="jumbotron">
                    <form onClick={handleOrder}>
                        <div className="bgAddService">
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control w-75" name="name" placeholder="Your name/ Company's name" required/>
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="email" className="form-control w-75" name="email" placeholder="Your email address" required/>
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control w-75" name="projectName" placeholder="Project name" required/>
                            </div>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} type="text" className="form-control w-75" name="projectDetails" placeholder="Project details" cols="30" rows="10" required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control w-75" name="price" placeholder="Price" required/>
                            </div>
                            <div className="form-group">
                                <input onChange={handleFileChange} type="file" className="form-control w-75" id="exampleInputPassword1" placeholder="Picture" required/>
                            </div>
                        </div>
                        <Link to="/service-list"><button type="submit" className="btn btn-success mt-3">Submit</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;