import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
  const [click, setClick] = useState(false); // Declare state
  const[button, setButton]= useState(true)
  const handleClick = () => {
    setClick(!click); // Toggle state
  };
  const closeMobileMenu=()=> setClick(false);
  const showButton=() =>{
    if(window.innerWidth<=960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
  useEffect(()=>{
    showButton()
  },[]);
  window.addEventListener('resize',showButton);
    return (
    <>
      <nav className="Navbar" >
        <div className="navbarContainer">
        <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
        <img src="/images/IIITNRlogo.png" alt="IIITNRlogo" className="logo" />
        </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <i className="bx bx-x"></i> // Close icon
            ) : (
              <i className="bx bx-menu"></i> // Menu icon
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-items'>
              <Link to='/About' className='navLinks' onClick={closeMobileMenu}>
              About
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/Commitee' className='navLinks' onClick={closeMobileMenu}>
              Committee
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/Speakers' className='navLinks' onClick={closeMobileMenu}>
              Speakers
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/Papers' className='navLinks' onClick={closeMobileMenu}>
              Call for Papers
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/Schedule' className='navLinks' onClick={closeMobileMenu}>
              Schedule
              </Link>
            </li>

            <li className='nav-items'>
              <Link to='/Venue' className='navLinks' onClick={closeMobileMenu}>
              Venue
              </Link>
            </li>
            <li className='nav-items'>
              <Link to='/ContactUs' className='navLinks' onClick={closeMobileMenu}>
              Contact Us
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>Register</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar
