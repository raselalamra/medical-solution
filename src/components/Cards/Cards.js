import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cards = ({ service }) => {
    const { id, img, title, description, price } = service;

    return (
    
        <div>
            <Col>
                <Card className="card-size">
                    <Card.Img variant="top" src={img} style={{ width: '100%' }} />
                    <Card.Body>

                        <Card.Title>Name: {title}</Card.Title>
                        <p>Description: {description}</p>
                        <p><small>Cost:${price}</small></p>

                        <Link to={`/service/${service?.id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
        
        

    );
};

export default Cards;