
import React, { useState, useEffect } from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
export const importantDates = [
  { event: "Paper Submission Deadline", date: "30th June 2025" },
  { event: "Acceptance Notification", date: "1st October 2025" },
  { event: "Camera Ready Paper Submission", date: "25th October 2025" },
  { event: "Registration Deadline", date: "5th November 2025" },
  { event: "Conference Date", date: "14-16 January, 2026" }
];

const Schedule = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="schedule-container">
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
        ICISS 2026
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
      
      <h2 className="committee-heading"style={{ color: '#0021f3' }}>Important Dates</h2>
      
      {/* Important Dates List */}
      <div className="important-dates-section" id="important-dates">
        
        <table className="important-dates-table">
          <tbody>
            {importantDates.map((date, index) => (
              <tr key={index}>
                <td className="event-name">{date.event}</td>
                <td className="event-date">{date.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
