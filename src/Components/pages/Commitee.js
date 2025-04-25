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
    <img src="/images/ICISS_logo-removebg-preview.png" alt="Logo2" className="logo" />
  </Link>
</div>
        <h1 className="mainTitle-banner-title">
          ICISS -2026 Committee
        </h1>
      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
          <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/proceedings">📘 Online Proceedings</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
          <li><a href="/query">📍 Queries</a></li>
          <li><a href="/FAQs">📍 Frequently asked questions</a></li>
          <li><a href="/commitee">📍 Commitee members</a></li>
        </ul>
      </div>
      <div className="committee-grid">
        <div className="committee-column">
          <div className="committee-section">
            <h2>General Chair</h2>
            <p>RK Shyamasundar - IIT Bombay</p>
          </div>

          <div className="committee-section">
            <h2>Technical Program Chairs</h2>
            <p>Ram Krishnan - University of Texas at San Antonio</p>
            <p>Vishwas Patil - IIT Bombay</p>
          </div>

          <div className="committee-section">
            <h2>Patron</h2>
            <p>Rahul Banerjee - LNMIIT Jaipur</p>
          </div>

          <div className="committee-section">
            <h2>Organising Chair</h2>
            <p>Jayaprakash Kar - LNMIIT Jaipur</p>
          </div>

          <div className="committee-section">
            <h2>Publicity Chairs</h2>
            <p>Enrico Bassetti - TU Delft</p>
            <p>Maurantonio Caprolu - KAUST</p>
            <p>Preetam Mukherjee - Digital University Kerala</p>
          </div>

          <div className="committee-section">
            <h2>Web Chair</h2>
            <p>Vishwas Patil - IIT Bombay</p>
          </div>
        </div>

        <div className="committee-column">
          <div className="committee-section">
            <h2>PhD Forum Chairs</h2>
            <p>Radhika BS - NITK Surathkal</p>
            <p>Preetam Mukherjee - Digital University Kerala</p>
          </div>

          <div className="committee-section">
            <h2>Organising Executive Committee</h2>
            <p>Venkata Badarla - IIT Tirupati</p>
            <p>Neminath Hubbali - IIT Indore</p>
            <p>Chandrashekar Jatoth - NIT Raipur</p>
            <p>Jayaprakash Kar - LNMIIT Jaipur</p>
            <p>Vishwas Patil - IIT Bombay</p>
            <p>Somnath Tripathy - IIT Patna</p>
          </div>

          <div className="committee-section">
            <h2>Advisory Steering Committee</h2>
            <p>Venu Govindaraju - University of Buffalo</p>
            <p>Sushil Jajodia - George Mason University</p>
            <p>Somesh Jha - University of Wisconsin</p>
            <p>Atul Prakash - University of Michigan</p>
            <p>Pierangela Samarati - University of Milan</p>
            <p>RK Shyamasundar - IIT Bombay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
