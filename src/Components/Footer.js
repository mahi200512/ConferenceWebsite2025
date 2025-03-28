import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Call for Research Papers</h3>
          <p>
            Previously unpublished research manuscripts are invited for a double-blind peer review process.
          </p>
          <Link to="/papers">More details...</Link>
        </div>

        <div className="footer-section">
          <h3>Call for PhD Forum</h3>
          <p>PhD scholars can participate with a submission and seek in-person feedback.</p>
          <Link to="/phd-forum">More details...</Link>
        </div>

        <div className="footer-section">
          <h3>Submission Deadlines (AoE)</h3>
          <p>Regular papers: July 31, 2024</p>
          <p>Industry papers/Demo: Aug 10, 2024</p>
          <p>PhD Forum: Nov 10, 2024</p>
          <p>Tutorials: Oct 10, 2024</p>
        </div>

        <div className="footer-section">
          <h3>Announcements</h3>
          <p>Results for papers, demos, and tutorials will be announced as per the timeline.</p>
          <Link to="/announcements">More details...</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
