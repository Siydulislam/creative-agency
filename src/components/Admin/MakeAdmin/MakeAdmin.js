import React from 'react';
import './MakeAdmin.css';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const handleMakeAdmin = data => {
        fetch('https://tranquil-beach-52858.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
            .then(data => {
                if (data) {
                    alert ('Admin has been added successfully')
                }
            })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Make Admin</b></h2>
                <div className="jumbotron">
                    <form onSubmit={handleMakeAdmin}>
                        <div className="bgMakeAdmin">
                            <label><b>Email</b></label>
                            <input type="email" className="form-control w-50" placeholder="john@gmail.com"/>
                            <button className="btn btn-success mt-2" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;