import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
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
          <p>Paper Submission Deadline: 30 June 2025</p>
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
        </div>

      </div>
    </footer>
  );
};

export default Footer;
