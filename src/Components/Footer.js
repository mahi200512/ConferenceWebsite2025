import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import  { useEffect, useState } from 'react';

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({ months: 0, days: 0, hours: 0 });

useEffect(() => {
  const targetDate = new Date("2026-01-14T00:00:00");

  const updateTimer = () => {
    const now = new Date();
    const totalSeconds = Math.floor((targetDate - now) / 1000);

    if (totalSeconds <= 0) {
      setTimeLeft({ months: 0, days: 0, hours: 0 });
      return;
    }

    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / (3600 * 24)) % 30;
    const months = Math.floor(totalSeconds / (3600 * 24 * 30));

    setTimeLeft({ months, days, hours });
  };

  updateTimer(); // initial call
  const intervalId = setInterval(updateTimer, 3600000); // update every hour

  return () => clearInterval(intervalId);
}, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><Link to="/papers">Call for Papers</Link></p>
          <p><Link to="/committee">Committee</Link></p>
          <p><Link to="/speakers">Speakers</Link></p>
          <p><Link to="/papersubmission">Paper Submission</Link></p>
          <p><Link to="/registrations">Registration</Link></p>
          <p><Link to="/venue">Venue</Link></p>
          <p><Link to="/schedule">Submission Deadline</Link></p>
        </div>

        <div className="footer-section">
          <h3>Important Dates</h3>
          <p>Submission Deadline: 14th August, 2025</p>
          <p>Acceptance Notification: 1st October 2025</p>
          <p>Camera Ready Due: 25th October 2025</p>
          <p>Registration Deadline: 5th November 2025</p>
          <p>Conference Dates: 14-16 January 2026</p>
        </div>

        <div className="footer-section">
          <h3>Contact Person</h3>
          <p> Ruhul Amin<br/>+91 88041 52340</p>
          <p> Vinay Kumar<br/>+91 94546 90527</p>
          <a href="mailto:iciss2026@iiitnr.edu.in"><p><Link to="/contact">Email: iciss2026@iiitnr.edu.in</Link></p></a>
        </div>

        <div className="footer-section">
  <h3>Latest News</h3>
  <p>To be updated soon…</p>
  <h3>Countdown to Conference</h3>
  <p className="countdown">{timeLeft.months} months, {timeLeft.days} days, {timeLeft.hours} hours left</p>
</div>


      </div>
    </footer>
  );
};

export default Footer;
