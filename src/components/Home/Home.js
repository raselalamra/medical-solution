import React from 'react';
import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Login></Login>
        </div>
    );
};

export default Home;