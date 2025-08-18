import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

const places = [
  {
    name: "Nandanvan Jungle Safari",
    image: "/images/nandanvan.png",
    description: "Explore wildlife including tigers, lions, and more, just 15 km from IIIT-NR."
  },
  {
    name: "MM Fun City",
    image: "/images/mmfuncity.png",
    description: "Water park with thrilling slides and pools, perfect for weekend relaxation."
  },
  {
    name: "Tribal Freedom Fighter Museum",
    image: "/images/museum.jpg",
    description: "State’s first Tribal Museum, offering lifelike and interactive cultural experiences."
  },
  {
    name: "Marine Drive Raipur",
    image: "/images/Marine.png",
    description: "A lively riverfront with cafes, activities, and sunset views."
  },
  {
    name: "Shahid Veer Narayan Singh International Stadium",
    image: "/images/Internationalstadium.png",
    description: "Modern cricket stadium that hosts IPL and national-level matches."
  },
  {
    name: "City Center Mall",
    image: "/images/citycentre.png",
    description: "A hub for shopping, food courts, and entertainment, located in central Raipur."
  },
  {
    name: "Energy Park",
    image: "/images/energypark.png",
    description: "Eco-friendly park with solar installations, boating, and kids’ activities."
  },
  {
    name: "Gandhi Udyan",
    image: "/images/gandhiud.png",
    description: "Beautifully landscaped garden ideal for morning walks and picnics."
  },
  {
    name: "Magneto Mall",
    image: "/images/magneto.png",
    description: "Premium mall with branded outlets, restaurants, and movie theaters."
  }
];

const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg',
  '/images/junglesafari.jpg'
];

const Explore = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="explore-container">
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

        <div className="banner-bottom-left">Conference: 14–16 January 2026</div>
        <div className="banner-bottom-right">Submission Deadline: 31st August 2025</div>
      </div>

      <div className="scrolling-strip">
        <ul className="scrolling-list">
          <li><a href="/Schedule">📅 Conference Date: 14-16 January, 2026</a></li>
          <li><a href="/Schedule">📅 Deadline:31st August 2025</a></li>
          <li><a href="https://link.springer.com/book/9789819642724">Proceeding of ICISS 2024</a></li>
          <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
        </ul>
      </div>

      <h1 className="explore-heading">Explore Nearby Attractions</h1>

      <div className="places-grid">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.image} alt={place.name} className="place-image" />
            <h3 className="place-name">{place.name}</h3>
            <p className="place-description">{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
