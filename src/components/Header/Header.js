import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Helth Site</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#about">About</Nav.Link>
                            <Nav.Link as={Link} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Navbar.Text>Signed in as: <a href="#login">Mark Otto</a></Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
