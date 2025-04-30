import { useState, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"; // Ensure this is correctly linked or use Committee.css if separate
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const Committee = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="committee-container">
        <div
        className="mainTitle-banner-section"
        style={{
          backgroundImage: `url(${bannerImages[currentImage]})`
        }}
      >
      
<div className="logo-left">
  <Link to="/">
    <img src="/images/IIITNRlogo.png" alt="Logo1" className="logo" />
  </Link>
</div>

<div className="logo-right">
  <Link to="/">
    <img src="/images/ICISS logo.png" alt="Logo2" className="logo" />
  </Link>
</div>
        <h1 className="mainTitle-banner-title">
          
        </h1>
      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
          <li><a href="/FAQs">📍 Frequently asked questions</a></li>
        </ul>
      </div>
      <div className='Committees'>
        <div className='com1'><h3>Chief-Patron</h3><p>Shri S. Bharathi Dasan, Director (I/C), IIIT-Naya Raipur</p>
        <h3>Patron(s)</h3><p>Dr. Srinivasa K.G. IIIT NR</p>
        <p>Dr. Mithilesh K Choube, IIIT Naya Raipur</p>
        <p>Dr. Rajarshi Mahapatra, IIIT Naya Raipur</p>
        <h3>General Chair</h3>
        <p>Dr. Srinivasa K.G. IIIT NR</p>
        <p>Satyanarayana Vollala, IIIT Naya Raipur</p>
        <p>Santosh Kumar IIIT Naya Raipur</p>
        <h3>Organizing Chair</h3>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Organizing Secretary</h3>
        <p>Dr. Vinay Kumar, IIIT Naya Raipur</p>
        <h3>Program Chairs</h3>
        <p>Dr. Debasis Giri, MAKAUT</p>
        <p>Dr. Sangram Ray, NIT SIKKIM</p>
        <p>Dr. Sanasam Ranbir Singh, IIT Guwahati</p>

        <h3>Publicity Chair</h3>
        <p>Dr. Shailesh Khapre, IIIT Naya Raipur</p>
        <p>Dr. Mayukh Sarkar, NIT Jamshedpur</p>
        <p>Dr. Goutham Alavalapati,  University of Illinois</p>
        <p>Debasis Das, IIT Jodhpur</p>
        <p>Dr. Karan Singh, JNU</p>
        <h3>Publication  Chair</h3>
        <p>Dr. Shyamalendu Kandar, IIEST Shibpur</p>
        <p>Dr. Ruhul Amin, IIIT NR</p>
        <h3>Local Organizing Committee</h3>
        <p>Punya P. Paltani, IIIT Naya Raipur</p>
        <h3>Sponsorship Committee</h3>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Website Management Committee</h3>
        <p>Mr. Abir</p>
        <p>Mr. Parbinder Singh</p>
        <h3>Local Organizing Committee</h3>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        </div>
        <div className='com2'>
        <h3>Technical Program Committee</h3><p>------</p>
        <h3>Advisory Committee</h3><p>------</p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
