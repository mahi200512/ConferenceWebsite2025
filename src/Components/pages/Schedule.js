
import React, { useState, useEffect } from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];

const round2Dates = [
  { event: "Paper Submission Deadline", date: "31st August 2025", highlight: true },
  { event: "Acceptance Notification", date: "1st October 2025" },
  { event: "Camera Ready Paper Submission", date: "25th October 2025" },
  { event: "Registration Deadline", date: "5th November 2025" },
  { event: "Conference Date", date: "14-16 January, 2026" }
];

const round1Dates = [
  { event: "Paper Submission Deadline", date: "14th August 2025", softHighlight: true },
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


  const renderDates = (title, dates, status) => (
    <motion.div
  className={`round-section ${status}`}
  initial={{ opacity: 0, scale: status === "active" ? 0.9 : 0.95 }}
  animate={{ opacity: 1, scale: status === "active" ? 1.05 : 0.95 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
      <h3>{title}</h3>
      <table className="important-dates-table">
        <tbody>
          {dates.map((d, i) => (
            <tr key={i}>
              <td>{d.event}</td>
              <td>
                {d.highlight ? (
                  <span style={{ color: 'red', fontWeight: 'bold' }}>{d.date}</span>
                ) : d.softHighlight ? (
                  <span style={{ color: 'orange', fontWeight: 'bold' }}>{d.date}</span>
                ) : (
                  d.date
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
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
       
<h1 className="mainTitle-banner-title"></h1>
        <h1 className="mainTitle-banner-title">
        Second International Conference on Intelligent Systems and Security
         <h1 className="mainTitle-banner-title">(ICISS 2026)</h1>
        </h1>

      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
        <li><a href="/Schedule">📅 Conference Date: 14-16 January, 2026</a></li>
        <li><a href="/Schedule">📅 Deadline: 14th August, 2025</a></li>
         <li><a href="https://link.springer.com/book/9789819642724">Proceeding of ICISS 2024</a></li>
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
        </ul>
      </div>
       <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'red', fontWeight: 'bold' }}>
          Paper submission is OPEN (31st August 2025)
        </h2>
        <p>Due to numerous requests from authors, the deadline for paper submission has been extended. Submissions made during this period will be considered for Round 2.</p>
      </div>

      <h2 className="committee-heading" style={{ color: '#0021f3' }}>Important Dates</h2>
      <motion.div 
  className="dates-wrapper"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {renderDates('Round 2 (Active)', round2Dates, 'active')}
  {renderDates('Round 1 (Inactive)', round1Dates, 'inactive')}
</motion.div>

      <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
        Important Information: The submitted papers are currently under peer review, and notifications will be provided as per the announced schedule.
      </p>
    </div>
  );
};
export default Schedule;
