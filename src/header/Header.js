import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../images/Logo.png';
import header from '../images/Image/header.png';
import Location from '../location/Location';

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${header})` }} className="header">
            <Navbar bg="transparent" variant = "light" expand="lg">
                <Navbar.Brand href="home"><img src={logo} width="120px" height="60px" className="d-inline-block align-top ml-5" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline  className="ml-5">
                        <FormControl type="text" placeholder="Search" className="ml-sm-2" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-5" href="news">News</Nav.Link>
                        <Nav.Link className="mr-5" href="destination">Destination</Nav.Link>
                        <Nav.Link className="mr-5" href="blog">Blog</Nav.Link>
                        <Nav.Link className="mr-5" href="contact">Contact</Nav.Link>
                    </Nav>
                        <Button className = "mr-5" variant="warning">Login</Button>
                </Navbar.Collapse>
            </Navbar>
            <Location></Location>
        </div>
    );
};

export default Header;