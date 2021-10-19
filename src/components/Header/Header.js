import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <div className="logo p-3"><img src={logo} style={{ "width": "120px"}} alt="" /></div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about"> About</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/equipment"> Equipment</Nav.Link>
                        
                        {
                            user.email ? <div><img src={user.photoURL} className="rounded-circle" width="50px" alt="" />  <Button onClick={logOut} className="text-white">Log Out</Button></div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;