import React from "react";
import "../../App.css"; // Ensure this is correctly linked or use Committee.css if separate

const Committee = () => {
  return (
    <div className="committee-container">
      <div className="about-banner-section">
        <h1 className="about-banner-title">COMMITTEE</h1>
      </div>
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

      <div className="committee-section">
        <h2>Technical Program Committee</h2>
        <p>We are accepting recommendations for the Program Committee; please fill up this form:</p>
        <a href="https://forms.gle/kadD9ww6zKWga4vd8" target="_blank" rel="noopener noreferrer" className="committee-link">
          Submit Recommendations (Submissions Closed)
        </a>
        <ul>
          <li>Balaji Palanisamy - University of Pittsburgh, USA</li>
          <li>Phu Phung - University of Dayton, USA</li>
          <li>Hyoungshick Kim - Sungkyunkwan University, South Korea</li>
          <li>Rajat Subhra Chakraborty - IIT Kharagpur, India</li>
          <li>Sandeep Shukla - IIT Kanpur, India</li>
          <li>Sanjit Chatterjee - IISc Bengaluru, India</li>
          <li>Silvio Ranise - Fondazione Bruno Kessler, Italy</li>
          <li>Mahesh Tripunitara - University of Waterloo, Canada</li>
          <li>Vijay Atluri - Rutgers Business School, USA</li>
          <li>Shamik Sural - IIT Kharagpur, India</li>
          <li>Zheng Li - CISPA, Germany</li>
          <li>Aolin Ding - Accenture Labs, USA</li>
          <li>Pradeep Kumar D S - ZOHO Corporation, India</li>
          <li>Basavesh Shivakumar - Virginia Tech, USA</li>
          <li>Claudio Ardagna - Università degli Studi di Milano, Italy</li>
          <li>NV Narendra Kumar - TCS Research, India</li>
          <li>Luigi V Mancini - Sapienza University of Rome, Italy</li>
          <li>Mainack Mondal - IIT Kharagpur, India</li>
          <li>László Szekeres - Google Research, USA</li>
          <li>Shubham Agarwal - CISPA, Germany</li>
          <li>Adwait Nadkarni - William & Mary, USA</li>
          <li>Vaishnavi Sundararajan - IIT Delhi, India</li>
          <li>Abhishek Bichhawat - IIT Gandhinagar, India</li>
          <li>Rinku Dewri - University of Denver, USA</li>
          <li>Chethan Kamath - IIT Bombay, India</li>
          <li>Enrico Bassetti - TU Delft, The Netherlands</li>
          <li>Maurantonio Caprolu - KAUST, Saudi Arabia</li>
          <li>Preetam Mukherjee - Digital University Kerala, India</li>
        </ul>
      </div>

      <div className="committee-section">
        <h2>Call for Research Papers</h2>
        <p>
          Previously unpublished research manuscripts are invited for a double-blind peer review process. 
          Exceptional papers will be invited for further publication.
        </p>
      </div>
    </div>
  );
};

export default Committee;
