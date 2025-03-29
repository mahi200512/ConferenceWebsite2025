import React from "react";
import "../../App.css"; // Ensure this is correctly linked or use Committee.css if separate

const Committee = () => {
  return (
    <div className="committee-container">
      <div className="about-banner-section">
        <h1 className="about-banner-title">COMMITTEE</h1>
      </div>
      <div className="committee-grid">
        <div className="committee-column">
          <div className="committee-section">
            <h2>General Chair</h2>
            <p>RK Shyamasundar - IIT Bombay</p>
          </div>

          <div className="committee-section">
            <h2>Technical Program Chairs</h2>
            <p>Ram Krishnan - University of Texas at San Antonio</p>
            <p>Vishwas Patil - IIT Bombay</p>
          </div>

          <div className="committee-section">
            <h2>Patron</h2>
            <p>Rahul Banerjee - LNMIIT Jaipur</p>
          </div>

          <div className="committee-section">
            <h2>Organising Chair</h2>
            <p>Jayaprakash Kar - LNMIIT Jaipur</p>
          </div>

          <div className="committee-section">
            <h2>Publicity Chairs</h2>
            <p>Enrico Bassetti - TU Delft</p>
            <p>Maurantonio Caprolu - KAUST</p>
            <p>Preetam Mukherjee - Digital University Kerala</p>
          </div>

          <div className="committee-section">
            <h2>Web Chair</h2>
            <p>Vishwas Patil - IIT Bombay</p>
          </div>
        </div>

        <div className="committee-column">
          <div className="committee-section">
            <h2>PhD Forum Chairs</h2>
            <p>Radhika BS - NITK Surathkal</p>
            <p>Preetam Mukherjee - Digital University Kerala</p>
          </div>

          <div className="committee-section">
            <h2>Organising Executive Committee</h2>
            <p>Venkata Badarla - IIT Tirupati</p>
            <p>Neminath Hubbali - IIT Indore</p>
            <p>Chandrashekar Jatoth - NIT Raipur</p>
            <p>Jayaprakash Kar - LNMIIT Jaipur</p>
            <p>Vishwas Patil - IIT Bombay</p>
            <p>Somnath Tripathy - IIT Patna</p>
          </div>

          <div className="committee-section">
            <h2>Advisory Steering Committee</h2>
            <p>Venu Govindaraju - University of Buffalo</p>
            <p>Sushil Jajodia - George Mason University</p>
            <p>Somesh Jha - University of Wisconsin</p>
            <p>Atul Prakash - University of Michigan</p>
            <p>Pierangela Samarati - University of Milan</p>
            <p>RK Shyamasundar - IIT Bombay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
