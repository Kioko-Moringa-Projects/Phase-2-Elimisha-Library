import React from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
 
} from "react-bootstrap";

function Navigation({ isDarkMode, onDarkModeClick }) {
  
  return (
    
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container fluid className="d-flex">
          <div className="p-2">
            <Navbar.Brand className="d-flex align-items-center" href="/home">
              <i className="fas fa-book-open fa-2x"></i>
              Elimisha-Library
            </Navbar.Brand>
          </div>
          <div className="p-2">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="d-flex align-items-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink to="/home" >Home</NavLink> 
                <NavLink to="/addbook" >Add a book</NavLink>
                <NavLink to="/about" >About</NavLink>
                
                
                <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    
  );
}

export default Navigation;