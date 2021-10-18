import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import Cards from '../../card/Cards';
import Cards from '../Cards/Cards';

const Homes = () => {
    const [temple, setTemple] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setTemple(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">


            <Row xs={1} md={3}
                className="g-4 mt-4 mb-4">
                {
                    temple.map(service => <Cards
                        service={service}
                    ></Cards>)
                }
            </Row>
        </div>
    );
};

export default Homes;