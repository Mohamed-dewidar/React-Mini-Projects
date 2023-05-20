import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function AppNavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={'brand'}>Hystria Rostars</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
            <NavLink to={'/contactus'} className={'nav-link'} >Contact us</NavLink>
            <NavLink to={'/login'} className={'nav-link'} >Login</NavLink>
            <NavLink to={'/description'} className={'nav-link'} >Descriptions</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
