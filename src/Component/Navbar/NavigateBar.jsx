import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import { BlueText, RedText, WhiteButton, BlueButton } from '../Style/Styled';

export default function Navigatebar() {
    return (
        <Navbar expand="lg" className="whole-navbar">
            <Container className=''>
                <Navbar.Brand href="/home"><BlueText>Ship</BlueText><RedText>Up</RedText></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='navitems d-flex justify-content-center '>
                        <NavDropdown title="Company" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Career</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#link">Solution</Nav.Link>
                        <Nav.Link href="#home">Industries</Nav.Link>
                        <Nav.Link href="#link">Insight</Nav.Link>
                        <Nav.Link href="#link">News and Media</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#link"><WhiteButton>Request Quote</WhiteButton></Navbar.Brand>
                <Navbar.Brand href="#link"><BlueButton>Join Now</BlueButton></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    );
}