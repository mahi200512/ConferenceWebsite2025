import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../App.css';

const mapStyles = {
  height: '400px',
  width: '100%',
};

// Coordinates of IIIT Naya Raipur
const defaultCenter = {
  lat: 21.2107,
  lng: 81.6751,
};

const Venue = () => {
  return (
    <div className="venue-container">
      <div className="about-banner-section">
        <h1 className="about-banner-title">VENUE</h1>
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
