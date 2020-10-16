import React, { useEffect, useState } from 'react';
import './OrderList.css';
import Sidebar from '../../Sidebar/Sidebar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-beach-52858.herokuapp.com/ordersList')
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, []);
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 mt-5">
                <h2><b>Order List</b></h2>
                <div className="jumbotron">
                    <div className="bgOrderList">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Email ID</th>
                                    <th className="text-secondary" scope="col">Project</th>
                                    <th className="text-secondary" scope="col">Project Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderList.map((orderList) =>
                                        <tr>
                                            <td className="text-secondary">{orderList.name}</td>
                                            <td className="text-secondary">{orderList.email}</td>
                                            <td className="text-secondary">{orderList.projectName}</td>
                                            <td className="text-secondary">{orderList.projectDetails}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;