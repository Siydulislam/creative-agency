import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import SomeOfOurWorks from '../SomeOfOurWorks/SomeOfOurWorks';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <SomeOfOurWorks></SomeOfOurWorks>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;