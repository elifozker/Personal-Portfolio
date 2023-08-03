"use client"
import React, { useState } from 'react';
import  styles from "./styles.module.css"
function Navbar (){
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavOnLinkClick = () => {
    setIsNavOpen(false);
  };

  const navbarItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/' },
    { id: 3, title: 'Techs', link: '/' },
    { id: 4, title: 'My Works', link: '/' },
    { id: 5, title: 'Contact', link: '/' },
  ];

  return (
    <nav className="navbar navbar-expand-lg mt-2 " >
      <div className="container">
        <a className="navbar-brand" href="/">ElifÖzker</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse flex justify-content-center ${isNavOpen ? 'show' : ''} `}>
          <ul className="navbar-nav ml-auto">
            {navbarItems.map((item) => (
              <li  key={item.id}>
                <button  className={styles.btn} onClick={closeNavOnLinkClick}> {item.title}  </button>    
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
