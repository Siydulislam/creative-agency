import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/order-list');
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand" href="/"><img src={logo} alt="" style={{width:'40%'}}/></a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
                    <button onClick={handleClick} className="btn btn-primary mx-2" type="submit">Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;