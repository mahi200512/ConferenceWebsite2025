import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Mainpage.css';
import '../App.css';

const bannerImages = [
  '/images/IIITNRFrontDroneView.png',
  '/images/AtalNagarVikasPradhikaran.jpg',
  '/images/IIITNRNightImage.jpeg',
  '/images/museum.jpg',
  '/images/junglesafari.jpg'
];

function Mainpage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
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
            2nd International Conference on Information Systems Security (ICISS 2026)
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
      <p className="proceedings-info animate__animated animate__fadeInUp">
      "Advancing knowledge, fostering collaboration, and securing the digital future through shared <span className="springer-highlight"> innovation</span> and <span className="springer-highlight"> expertise</span>." 
      </p>
      <div className="hero-btns fade-in-delay">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => window.open("/Schedule", "_blank")}
        >
          Conference Program
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          Online Proceedings
        </Button>
      </div>
      {/* Conference Dates and Description Section */}
      <div className="conference-details">
        <p className="conference-dates">
          📅 <strong>Dates:</strong> August 10-12, 2025
        </p>
      <div className="HostVenue fade-in-late">
        The Conference will be hosted by IIIT Naya Raipur.
      </div>
    </div>
    <br />
    <p className="conference-description">
          This conference brings together leading experts and practitioners in the field of Information Systems Security to discuss the latest trends, challenges, and research breakthroughs. With a focus on securing digital systems in an increasingly interconnected world, the conference promises insightful sessions, workshops, and networking opportunities.
        </p>
      </div>
  );
}

export default Mainpage;
