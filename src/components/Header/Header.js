import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        {/* <Navbar.Brand href="#home">Medical Solution</Navbar.Brand> */}
                        <div className="logo p-3"><img src={logo} style={{ "width": "120px"}} alt="" /></div>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/equipments">Equipments</Nav.Link>
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


// import React from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../hooks/useAuth';


// const Header = () => {
//     const {user, logOut} = useAuth();
//     return (

//         <>
//             <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
//                 <Container>
//                     <Navbar.Brand href="#home">Car Repairing Services</Navbar.Brand>
//                     <Navbar.Toggle />
//                         <Navbar.Collapse className="justify-content-end">
//                             <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
//                             <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
//                             <Nav.Link as={HashLink} to="/home#bout">About</Nav.Link>
//                             {user?.email ?
//                                 <Button onClick={logOut} variant="light">Logout</Button>:
//                                 <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
//                                 }
//                                 <Navbar.Text>
//                                     Signed in as: <a href="#login">{user?.displayName}</a>
//                                 </Navbar.Text>
//                         </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </> 
        
//     );
// };

// export default Header;