import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import OurClient from '../OurClient/OurClient';

const Header = () => {
    return (
        <section>
            <div style={{backgroundColor: '#FBD062'}}>
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <OurClient></OurClient>
        </section>
    );
};

export default Header;