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
          <p><Link to="/commitee">Committee</Link></p>
          <p><Link to="/Speakers">Speakers</Link></p>
          <p><Link to="/PaperSubmit">Paper Submission</Link></p>
          <p><Link to="/Registrations">Registration</Link></p>
          <p><Link to="/venue">Venue</Link></p>
          <p><Link to="/schedule">Submission Deadline</Link></p>
        </div>

        <div className="footer-section">
          <h3>Important Dates</h3>
          <p>Acceptance Notification: 30 July 2025</p>
          <p>Camera Ready Due: 15 August 2025</p>
          <p>Conference Dates: 20-22 September 2025</p>
        </div>

        <div className="footer-section">
          <h3>Announcements</h3>
          <p>LNNS Springer Indexed Publication Confirmed</p>
          <p>Workshops to be held on Day 1</p>
          <p>Limited accommodation available on campus</p>
          <p><Link to="/news">Click for Latest Updates</Link></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
