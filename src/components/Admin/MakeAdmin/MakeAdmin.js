import React from 'react';
import './MakeAdmin.css';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="container col-md-9 mt-5">
                <h2><b>Make Admin</b></h2>
                <div className="jumbotron">
                    <form>
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