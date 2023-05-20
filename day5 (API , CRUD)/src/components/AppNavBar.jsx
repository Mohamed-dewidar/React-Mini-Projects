import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link">
                Home
            </NavLink>
            {/* <NavLink to="/" className='nav-link'>Pricing</NavLink> */}
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavLink
                to="/products"
                className="text-decoration-none lead m-3 fs-6 text-dark text-center"
              >
                Show Products
              </NavLink>
              <br/>
              <NavLink
                to="/addproduct"
                className="text-decoration-none lead  m-3 fs-6 text-dark text-center "
              >
                Add Products
              </NavLink>
              {/* <br/>
              <NavLink
                to="/products"
                className="text-decoration-none lead m-3 fs-6 text-dark text-center "
              >
                Edit Products
              </NavLink>
              <NavDropdown.Divider />
              <NavLink
                to="/products"
                className="text-decoration-none lead text-dark m-3 fs-6 text-center "
              >
                Delete Products
              </NavLink> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink eventKey={2} className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
