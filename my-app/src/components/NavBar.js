import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">Tutor Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/students">Student</Nav.Link>
            <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Student Portal" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/signup">Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <h1>Hello World</h1>
    </Navbar>
  );
};

export default NavBar;

