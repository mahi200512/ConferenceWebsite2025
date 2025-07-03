import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];

const Venue = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="venue-container">
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
        Second International Conference on Intelligent Systems and Security
         <h1 className="mainTitle-banner-title">(ICISS 2026)</h1>
        </h1>
      </div>

      <div className="scrolling-strip">
        <ul className="scrolling-list">
        <li><a href="/Schedule">📅 Conference Date: 14-16 January, 2026</a></li>
        <li><a href="/Schedule">📅 Deadline:14th August, 2025</a></li>
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
        </ul>
      </div>

      <p className="venue-intro" style={{ color: '#0021f3' }}>Join us for ICISS 2026 at IIIT Naya Raipur.</p>

      <div className="venue-info">
        <h2>📍 Location Details</h2>
        <p><strong>Venue:</strong> International Institute of Information Technology (IIIT), Naya Raipur</p>
        <p><strong>Address:</strong> Plot No. 7, Sector 24, Naya Raipur, Chhattisgarh, India</p>
        <p><strong>Phone:</strong> +91 88041 52340</p>
        <p><strong>Email:</strong> iciss@iiitnr.edu.in</p>
      </div>

      {/* Static Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="IIIT Naya Raipur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119054.83821294046!2d81.60329530889498!3d21.20745704588245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2921c8c961f6c3%3A0xd5ed0e94b17a3cf0!2sIIIT%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1714568479215"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="directions">
        <h2>🛣 Get Directions</h2>
        <p>Click below to get directions on Google Maps:</p>
        <a
          href="https://www.google.com/maps?q=IIIT+Naya+Raipur"
          target="_blank"
          rel="noopener noreferrer"
          className="directions-button"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default Venue;
