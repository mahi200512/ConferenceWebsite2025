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

const Sponsorship = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sponsorships-container">
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
          <li><a href="/Schedule">📅 Deadline:30th June, 2025</a></li>
          <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
        </ul>
      </div>

      <div className="sponsorship-table-section" style={{ padding: "2rem" }}>
      <h1 className="MainHeading" style={{ textAlign: 'center' }}>ICISS 2026 Sponsorship Categories</h1>
        <table className="sponsorship-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Sponsorship Level</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Contribution (INR / USD)</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>🥇 Platinum Sponsor</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹5,00,000 / $6,000</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                - Prime logo placement on website, banners & certificates<br />
                - Full-page ad in the proceedings<br />
                - 3 free delegate passes<br />
                - Speaking opportunity<br />
                - Booth space
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>🥈 Gold Sponsor</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹3,00,000 / $3,600</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                - Prominent logo on website & banners<br />
                - Half-page ad in proceedings<br />
                - 2 free delegate passes<br />
                - Booth space
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>🥉 Silver Sponsor</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹1,50,000 / $1,800</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                - Logo on website & banners<br />
                - Quarter-page ad in proceedings<br />
                - 1 free delegate pass
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>💼 Industry Partner</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹75,000 / $900</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                - Logo on website<br />
                - Mention in conference materials<br />
                - Shared booth space
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>📘 Academic Partner</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>₹50,000 / $600</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                - Logo on website<br />
                - 1 free faculty/student registration
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sponsorship;
