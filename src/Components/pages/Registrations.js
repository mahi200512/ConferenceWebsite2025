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
const Registrations = () => {
    const [currentImage, setCurrentImage] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
          }, 5000); // Change every 5 seconds
      
          return () => clearInterval(interval);
        }, []);
  return (
    <div className="registration-container">
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
        </h1>
      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
          <li><a href="/FAQs">📍 Frequently asked questions</a></li>
        </ul>
      </div>
 
      <h1 className="registration-title">Registration & Fees Details</h1>

      <p className="registration-text">
        Participants are required to pay the registration fee directly to the designated bank account. 
        After payment, participants must email the completed conference registration form along with 
        the payment proof to <a href="mailto:ruhul@iiitnr.edu.in">ruhul@iiitnr.edu.in</a> on or before <strong>(Date)</strong>. 
        The registration form and payment details are provided below.
      </p>

      <p className="registration-text">
        <strong>Cancellation Policy:</strong> Please note that no cancellation or refund will be permitted after registration.
      </p>

      {/* Participants Fee Table */}
      <div className="table-container">
        <table className="registration-table">
          <thead>
            <tr>
              <th>Participants Category</th>
              <th>Indian Participant</th>
              <th>Foreign Participant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Research Scholar/Student (UG, PG, PhD)</td>
              <td>INR 5000 + 18% GST = 5900</td>
              <td>USD 150 (including GST)</td>
            </tr>
            <tr>
              <td>Academician/Faculty</td>
              <td>INR 5500 + 18% GST = 6490</td>
              <td>USD 200 (including GST)</td>
            </tr>
            <tr>
              <td>Industry Personnel</td>
              <td>INR 6500 + 18% GST = 7670</td>
              <td>USD 300 (including GST)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="registration-text">
        <strong>Important Note:</strong> The registration fee for foreign participants should be paid in USD only.
      </p>

      {/* Account Details Table */}
      <h2 className="registration-subtitle">Account Details to Pay Registration Fee (Online Mode Only)</h2>

      <div className="table-container">
        <table className="registration-table">
          <tbody>
            <tr>
              <td><strong>Bank Name</strong></td>
              <td>[Insert Bank Name]</td>
            </tr>
            <tr>
              <td><strong>Account Number</strong></td>
              <td>[Insert Account Number]</td>
            </tr>
            <tr>
              <td><strong>Account Holder Name</strong></td>
              <td>[Insert Account Holder Name]</td>
            </tr>
            <tr>
              <td><strong>Branch Name and Address</strong></td>
              <td>[Insert Branch Name and Address]</td>
            </tr>
            <tr>
              <td><strong>IFSC Code</strong></td>
              <td>[Insert IFSC Code]</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Registration Information */}
      <h2 className="registration-subtitle">Registration Information</h2>
      <ul className="registration-list">
        <li>After completing the registration fee payment, participants must fill out and submit the registration form on or before the registration deadline.</li>
        <li>At least one author of each accepted paper must register for the conference and present their work.</li>
        <li>Authors are required to pay the registration fee through online mode only, as per the details mentioned above.</li>
        <li>The registration fee (inclusive of GST) covers both registration and publication charges and is non-refundable.</li>
      </ul>

      {/* Printable Link */}
      {/* <div className="printable-link">
        <a href="/printables/registration-form.pdf" target="_blank" rel="noopener noreferrer">
          Download Registration Form (Printable)
        </a>
      </div> */}
    </div>
  );
};

export default Registrations;
