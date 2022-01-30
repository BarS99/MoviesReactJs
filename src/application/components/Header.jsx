import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicketAlt,
  faPhone,
  faTv,
  faWrench,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menu] = useState([
    {
      name: "Movies",
      to: "/movies",
      icon: faTicketAlt,
    },
    {
      name: "Series",
      to: "/series",
      icon: faTv,
    },
    {
      name: "Contact",
      to: "/contact",
      icon: faPhone,
    },
  ]);

  const [nav] = useState([
    {
      name: "Control panel",
      to: "/panel",
      icon: faWrench,
    },
    {
      name: "Upload",
      to: "/upload",
      icon: faUpload,
    },
  ]);

  const [user] = useState({
    image: "images/user/thomas_shelby.jpg",
    name: "Thomas Shelby",
  });

  const [navExpanded, setNavExpanded] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setNavExpanded(() => {
      return false;
    });
  }, [navigate]);

  return (
    <header className="header position-sticky top-0 w-100">
      <Navbar
        expand="lg"
        bg="app-primary"
        variant="dark"
        expanded={navExpanded}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="order-first fw-bold">
            MoviesReactJS
          </Navbar.Brand>

          <Nav className="ms-auto flex-row align-items-center">
            <NavDropdown
              className="d-none d-lg-block"
              align="end"
              title={
                <div className="header__image d-inline-block align-middle me-2">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="d-block mw-100 mh-100"
                  />
                </div>
              }
              id="collasible-nav-dropdown"
            >
              {nav.map((item) => {
                return (
                  <NavDropdown.Item as={NavLink} to={item.to} key={item.to}>
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.name}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="ms-3"
              onClick={() =>
                setNavExpanded(() => {
                  return navExpanded ? false : "expanded";
                })
              }
            />
          </Nav>

          <Navbar.Collapse
            className="order-lg-first"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto">
              {menu.map((item) => {
                return (
                  <Nav.Link as={NavLink} to={item.to} key={item.to}>
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.name}
                  </Nav.Link>
                );
              })}

              <div className="d-lg-none">
                <hr className="border-1 border-top border-white my-1" />
                {nav.map((item) => {
                  return (
                    <Nav.Link as={NavLink} to={item.to} key={item.to}>
                      <FontAwesomeIcon icon={item.icon} className="me-2" />
                      {item.name}
                    </Nav.Link>
                  );
                })}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
