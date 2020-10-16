import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import OurClient from '../OurClient/OurClient';

const Header = () => {
    return (
        <section>
            <div className="header-background">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <OurClient></OurClient>
        </section>
    );
};

export default Header;