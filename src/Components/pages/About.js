import { useState, useEffect } from 'react';
import React from "react";
import "../../App.css";
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="about-container">
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
          About ICISS - 2026
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

      <p className="about-description" data-aos="fade-right">
        The ICISS Conference is a premier international platform for information security research and practice. Hosted annually in India between <strong>December 16-20</strong>, it brings together leading researchers and industry experts to share cutting-edge discoveries and use-case experiences.
      </p>
      <p className="about-highlight" data-aos="fade-left">
        <strong>Next Edition:</strong> ICISS 2024 will be hosted by <em>LNMIIT Jaipur</em>.
      </p>

      <div className="about-past-editions" data-aos="fade-up">
        <h2 className="past-title">Past Hosts</h2>
        <ul>
          <li>2023 – NIT Raipur</li>
          <li>2022 – IIT Tirupati</li>
          <li>2021 – IIT Patna</li>
          <li>2020 – IIT Jammu</li>
          <li>2019 – IDRBT Hyderabad</li>
          <li>2018 – IISc Bengaluru</li>
          <li>2017 – IIT Bombay</li>
          <li>2016 – Manipal University Jaipur</li>
          <li>2015 – Jadavpur University Kolkata</li>
          <li>... and many more!</li>
        </ul>
      </div>

      <a
        href="https://link.springer.com/conference/iciss"
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        data-aos="flip-up"
      >
        View Proceedings on Springer
      </a>
    </div>
  );
};

export default About;
