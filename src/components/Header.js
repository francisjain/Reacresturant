import React from 'react';
import {Navbar, Nav ,Container} from "react-bootstrap"

function Header() {
  return <div>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Resturant</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}

export default Header;
