import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./NavBar.css"


function Navigation({ isDarkMode, onDarkModeClick }) {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return(
    <nav className="navigation">
      <a href="/home" className="brand-name">
        Elimisha Library
      </a>
      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <NavLink  to= "/home" >Home</NavLink>
          </li>
          <li>
            <NavLink  to= "/addbook"  >Add a book</NavLink>
          </li>
          <li>
          <NavLink  to= "/about">About</NavLink>
          </li>
          <li>
            <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
          </li>
        </ul>
      </div>
    </nav>
  );
 /* return (
    
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
                <NavLink  to= "/home" >Home</NavLink> 
                <NavLink  to= "/addbook"  >Add a book</NavLink>
                <NavLink  to= "/about">About</NavLink>
                
                
                <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    
  );*/
}

export default Navigation;