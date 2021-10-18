import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
            <Doctors></Doctors>
        </div>
    );
};

export default Home;