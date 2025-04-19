import React from 'react';
import { Button } from './Button';
import './Mainpage.css';
import '../App.css';

function Mainpage() {
  return (
    <div className="hero-container">
      <img className='bgbg' src="\images\IIITNRFR.png" alt='iiitnr'/>
      <h1 className="fade-in">20th International Conference on Information Systems Security</h1>
      <p className="fade-in-delay">Proceedings published in the LNCS Series Volume 15416 of SpringerNature.</p>
      <div className="hero-btns fade-in-delay">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" onClick={() => window.open("/Schedule", "_blank")}>
          Conference Program
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          Online Proceedings
        </Button>
      </div>
      <br />
      <br />
      <div className="HostVenue fade-in-late">The Conference will be hosted by IIIT Naya Raipur.</div>
    </div>
  );
}

export default Mainpage;
