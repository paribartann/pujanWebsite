import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav} from 'react-bootstrap';

function Bar() {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Pujan Paudel</Navbar.Brand>
    <Nav className="ml-auto float-right">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/papers">Papers</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/research">Current Research</Nav.Link>
    </Nav>
    
  </Navbar>

  );
}

export default Bar;
