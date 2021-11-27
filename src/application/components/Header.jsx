import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import profile from "../../static/images/thomas_shelby.jpg";

const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="app-primary" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            MoviesReactJS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/movies">
                <FontAwesomeIcon icon={faTicketAlt} className="me-2" />
                Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown
                title={
                  <div className="header__image d-inline-block align-middle me-2">
                    <img
                      src={profile}
                      alt=""
                      className="d-block mw-100 mh-100"
                    />
                  </div>
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/action1">
                  Action 1
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/action2">
                  Action 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
