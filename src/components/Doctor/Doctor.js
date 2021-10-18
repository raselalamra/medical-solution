import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import '../Doctor/Doctor.css';


const Doctor = ({ service }) => {
    const { image, name, degree } = service;

    return (
        <div className="doctor">
           
            <Col>
                <Card className="card-size">
                    <Card.Img variant="top" src={image} style={{ width: '100%' }} />
                    <Card.Body>

                        <Card.Title>Name: {name}</Card.Title>
                        <p><small>Degree: {degree}</small></p>
                    </Card.Body>
                </Card>
            </Col>
            </div>

    );
};

export default Doctor;