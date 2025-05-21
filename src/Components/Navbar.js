import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false); // Handle menu toggle (for mobile)
  const [button, setButton] = useState(true); // Show button based on screen size
  const [collapsed] = useState(false); // Sidebar collapse state

  const handleClick = () => setClick(!click); // Toggle menu
  const closeMobileMenu = () => setClick(false); // Close menu on item click

  // const toggleSidebar = () => setCollapsed(!collapsed); // Toggle sidebar on desktop

  // Update button visibility based on screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className={`Navbar ${collapsed ? 'collapsed' : ''}`}>
        {/* <div className="toggle-btn" onClick={toggleSidebar}>
          {collapsed ? '>' : '<'}
        </div> */}
        <div className="navbarContainer">
          {/* <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
            <img src="ICISS logo.png" alt="IIITNRlogo" className="logo" />
          </Link> */}

          {/* Hamburger icon and menu toggle */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <i className="bx bx-x" /> : <i className="bx bx-menu" />}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
              <Link to='/About' className='navLinks' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Commitee' className='navLinks' onClick={closeMobileMenu}>Committee</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Speakers' className='navLinks' onClick={closeMobileMenu}>Speakers</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Papers' className='navLinks' onClick={closeMobileMenu}>Call for Papers</Link>
            </li>
            <li className='nav-items'>
              <Link to='/PaperSubmit' className='navLinks' onClick={closeMobileMenu}>Paper Submissions</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Sponsorship' className='navLinks' onClick={closeMobileMenu}>Call for Sponsorship</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Schedule' className='navLinks' onClick={closeMobileMenu}>Important Dates</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Registrations' className='navLinks' onClick={closeMobileMenu}>Registrations</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Venue' className='navLinks' onClick={closeMobileMenu}>Venue</Link>
            </li>
            <li className='nav-items'>
              <Link to='/Explore' className='navLinks' onClick={closeMobileMenu}>Explore Around</Link>
            </li>
            <li className='nav-items'>
              <Link to='/ContactUs' className='navLinks' onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
