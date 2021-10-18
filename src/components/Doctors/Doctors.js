import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import '../Doctors/Dortors.css';


const Doctors = () => {

    const [stead, ourStead] = useState([])
    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => ourStead(data))
    }, [])

    return (
        <div className="container">
            
            <h2 className="color">OUR DOCTORS</h2>

            <Row xs={1} md={2}
                className="g-4 mt-4 mb-4">
                {
                    stead.map(service => <Doctor
                        service={service}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;