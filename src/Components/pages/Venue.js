import React from 'react';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../App.css';
import { Link } from 'react-router-dom';
const mapStyles = {
  height: '400px',
  width: '100%',
};

// Coordinates of IIIT Naya Raipur
const defaultCenter = {
  lat: 21.2107,
  lng: 81.6751,
};
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
      }, 5000); // Change every 5 seconds
  
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
      <p>Join us for the 3-day conference at IIIT Naya Raipur.</p>

      <div className="venue-info">
        <h2>📍 Location Details</h2>
        <p><strong>Venue:</strong> International Institute of Information Technology (IIIT), Naya Raipur</p>
        <p><strong>Address:</strong> Plot No. 7, Sector 24, Naya Raipur, Chhattisgarh, India</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> contact@conference.com</p>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
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
