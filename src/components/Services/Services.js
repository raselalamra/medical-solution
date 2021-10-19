// import { registerVersion } from '@firebase/app';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';


const Services = () => {

    const [stead, ourStead] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => ourStead(data))
    }, [])

    return (
        <div className="container">
                  
            <Row xs={1} md={3}
                className="g-4 mt-4 mb-4">
                {
                    stead.map(service => <Cards
                        service={service}
                    ></Cards>)
                }
            </Row>

        </div>
    );
};

export default Services;