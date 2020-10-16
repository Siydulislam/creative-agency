import React from 'react';
import './Sidebar.css';
import { faCartPlus, faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {

    return (
        <div className="mt-5 ml-5">
            <img src={logo} alt="" style={{width: '200px'}}/>
            <div className="mt-5 sidebar">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/order" className="text-dark">
                            <FontAwesomeIcon icon={faCartPlus}/><span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-list" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingBag}/><span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-dark">
                            <FontAwesomeIcon icon={faFileAlt}/><span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/order-list" className="text-dark">
                            <FontAwesomeIcon icon={faShoppingBag}/><span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-service" className="text-dark">
                            <FontAwesomeIcon icon={faPlus}/><span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/make-admin" className="text-dark">
                            <FontAwesomeIcon icon={faUserPlus}/><span>Make Admin</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;