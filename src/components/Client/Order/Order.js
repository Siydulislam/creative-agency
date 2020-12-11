import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import SweetAlert from 'react-bootstrap-sweetalert';
import './Order.css';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const { loggedInUser } = useContext(UserContext);
    const [formSubmitStatus, setFormSubmitStatus] = useState("");
    
    const onSubmit = ( data ) => {
        console.log(data);
        const status = "Pending";
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('projectName', data.projectName);
        formData.append('projectDetails', data.projectDetails);
        formData.append('projectName', data.price);
        formData.append('status', status);
        formData.append('file', data.image[0]);

        fetch('https://tranquil-beach-52858.herokuapp.com/addOrders/', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                setFormSubmitStatus("Your order has been placed successfully!");
                document.getElementById("orderForm").reset();
            } else {
                setFormSubmitStatus("Opps... Something went wrong!");
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
                        <h2><b>Order</b></h2>
                    </div>
                    <div>
                        <h4><b>{loggedInUser.name}</b></h4>
                    </div>
                </div>
                <div className="jumbotron">
                    {formSubmitStatus && (
                        <SweetAlert
                            type={
                                formSubmitStatus.includes("placed") ? "success" : "danger"
                            }
                            title={
                                formSubmitStatus.includes("placed") ? "Thank you!" : "Oops!"
                            }
                            onConfirm={() => setFormSubmitStatus("")}
                        >
                            {formSubmitStatus}
                        </SweetAlert>
                    )}
                    <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="bgAddService">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control w-100" 
                                    name="name" 
                                    placeholder="Your name/ Company's name" 
                                    ref={register({
                                        required: "Your name/company name is required",
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: "Name must contain minimum 3 letters and only letter"
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <span className="error">{errors.name.message}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email" 
                                    className="form-control w-100" 
                                    name="email" 
                                    placeholder="Your email address" 
                                    ref={register({
                                        required: "Email Required",
                                        pattern: {
                                            value: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="error">{errors.email.message}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text" 
                                    className="form-control w-100" 
                                    name="projectName" 
                                    placeholder="Project name" 
                                    ref={register({
                                        required: "Project name is required",
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message:
                                            "Project name must contain minimum 3 letter and only letter"
                                        },
                                    })}
                                />
                                {errors.projectName && (
                                    <span className="error">{errors.projectName.message}</span>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text" 
                                    className="form-control w-100" 
                                    name="projectDetails" 
                                    placeholder="Project details" 
                                    cols="30" 
                                    rows="10" 
                                    ref={register({
                                        required: "Project details is required",
                                        pattern: {
                                          value: /^([a-zA-Z0-9 ]{10,400})/,
                                          message: "Project details must contain between 10-40 char ",
                                        },
                                      })}
                                />
                                {errors.projectDetails && (
                                    <span className="error">{errors.projectDetails.message}</span>
                                )}
                            </div>
                            <div className="w-50 pr-1 float-left">
                                <input
                                    type="number" 
                                    className="form-control" 
                                    name="price" 
                                    placeholder="Price"
                                    ref={register({
                                        required: "Price is required",
                                    })}
                                />
                                {errors.price && (
                                    <span className="error">{errors.price.message}</span>
                                )}
                            </div>
                            <div className="w-50 pl-1 float-right">
                                <label className="custom-file-upload">
                                    <input
                                        type="file" 
                                        className="form-control" 
                                        name="image" 
                                        placeholder="Picture"
                                        ref={register({
                                            required: "Image is required",
                                        })}
                                    />
                                    <img src="https://i.imgur.com/B4jPPfH.png" alt=""/>
                                    Upload Project File
                                </label>
                                {errors.image && (
                                    <span className="error">{errors.image.message}</span>
                                )}
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-success mt-3"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;