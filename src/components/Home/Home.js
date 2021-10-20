import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Homes from '../Homes/Homes';
import MedInfo from '../MedInfo/MedInfo';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <MedInfo></MedInfo>
            <Homes></Homes>
            <Link  to="/services"><button className="btn btn-primary">See More</button></Link>
            <Doctors></Doctors>
            
        </div>
    );
};

export default Home;