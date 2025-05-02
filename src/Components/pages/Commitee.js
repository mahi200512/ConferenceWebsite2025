import { useState, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"; // Ensure this is correctly linked or use Committee.css if separate
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const Committee = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="committee-container">
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
      <h2 className="committee-heading">Our Committee</h2>
      <div className='Committees'>
      
        <div className='com1'><h3>Chief-Patron</h3><p>Shri S. Bharathi Dasan, Director (I/C), IIIT-Naya Raipur</p>
        <h3>Patron(s)</h3><p>Dr. Srinivasa K.G. IIIT Naya Raipur</p>
        <p>Dr. Mithilesh K Choube, IIIT Naya Raipur</p>
        <p>Dr. Rajarshi Mahapatra, IIIT Naya Raipur</p>
        <h3>General Chair</h3>
        <p>Dr. Srinivasa K.G. IIIT Naya Raipur</p>
        <p>Dr.Satyanarayana Vollala, IIIT Naya Raipur</p>
        <p>Dr. Santosh Kumar IIIT Naya Raipur</p>
        <h3>Organizing Chair</h3>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Organizing Secretary</h3>
        <p>Dr. Vinay Kumar, IIIT Naya Raipur</p>
        <h3>Program Chairs</h3>
        <p>Dr. Debasis Giri, MAKAUT</p>
        <p>Dr. Sangram Ray, NIT Sikkim</p>
        <p>Dr. Sanasam Ranbir Singh, IIT Guwahati</p>

        <h3>Publicity Chair</h3>
        <p>Dr. Shailesh Khapre, IIIT Naya Raipur</p>
        <p>Dr. Mayukh Sarkar, NIT Jamshedpur</p>
        <p>Dr. Goutham Alavalapati,  University of Illinois</p>
        <p>Debasis Das, IIT Jodhpur</p>
        <p>Dr. Karan Singh, JNU</p>
        <h3>Publication  Chair</h3>
        <p>Dr. Shyamalendu Kandar, IIEST Shibpur</p>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Local Organizing Committee</h3>
        <p>Punya P. Paltani, IIIT Naya Raipur</p>
        <h3>Sponsorship Committee</h3>
        <p>Dr. Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Website Management Committee</h3>
        <p>Mr. Abir</p>
        <p>Mr. Parbinder Singh</p>
        <h3>Local Organizing Committee</h3>
        <p>Dr. Punya P. Paltani, IIIT Naya Raipur</p>
<p>Dr. Shrivishal Tripathi, IIIT Naya Raipur</p>
<p>Dr. Sresha Yadav, IIIT Naya Raipur</p>
<p>Dr. Manoj Kumar Majumder, IIIT Naya Raipur</p>
<p>Dr. Maifuz Ali, IIIT Naya Raipur</p>
<p>Dr. Amit Kumar Agrawal, IIIT Naya Raipur</p>
<p>Dr. Anurag Singh, IIIT Naya Raipur</p>
<p>Dr. Ramakrishna Bandi, IIIT Naya Raipur</p>
<p>Dr. Shailesh Khapre, IIIT Naya Raipur</p>
<p>Dr. Vijaya J, IIIT Naya Raipur</p>
<p>Dr. Lakhindar Murmu, IIIT Naya Raipur</p>
<p>Dr. Deepika Gupta, IIIT Naya Raipur</p>
<p>Dr. Avantika Singh, IIIT Naya Raipur</p>
<p>Dr. Abhishek Sharma, IIIT Naya Raipur</p>
        </div><div className='com1'><h3>Technical Committee</h3>
        <p>Dr. Abhisekh Das, Alia University, India</p>
  <p>Dr. Alekha Kumar Mishra, NIT Jamshedpur, India</p>
  <p>Dr. Alavalapati Goutham Reddy, University of Illinois, USA</p>
  <p>Dr. Alawi A. Al-saggaf, King Fahd University of Petroleum and Minerals, Saudi Arabia</p>
  <p>Dr. Bimal Kumar Meher, Silicon University, India</p>
  <p>Dr. Cheng-Chi Lee, Fu Jen Catholic University, Taiwan</p>
  <p>Dr. Chien-Ming Chen, Shandong University of Science and Technology, China</p>
  <p>Dr. Debanjan Das, IIT Kharagpur, India</p>
  <p>Dr. Debiao He, Wuhan University, China</p>
  <p>Dr. Dhreendra Mishra, MANIT Bhopal, India</p>
  <p>Dr. Gopa Bhaumik, NIT Jamshedpur, India</p>
  <p>Dr. Kinsuk Giri, NITTTR Kolkata, India</p>
  <p>Dr. Mayukh Sarkar, NIT Jamshedpur, India</p>
  <p>Dr. Md Azharuddin, Alia University, India</p>
  <p>Dr. Mohd Shameem, KFUPM, Saudi Arabia</p>
  <p>Dr. Mohammad Abdussami, SRM University, India</p>
  <p>Dr. Mohammad Shariq, United Arab Emirates University, UAE</p>
  <p>Dr. Mou Dasgupta, NIT Raipur, India</p>
  <p>Dr. M. Brindha, NIT Trichy, India</p>
  <p>Dr. Naeem Ahmad, NIT Raipur, India</p>
  <p>Dr. Neetesh Saxena, Georgia Institute of Technology, Atlanta, USA</p>
  <p>Dr. Neha Agrawal, IIIT Sri City, India</p>
  <p>Dr. Nitin Gupta, NIT Hamirpur, India</p>
  <p>Dr. Odelu Vanga, IIIT Chittoor, India</p>
  <p>Dr. Ponnuru Raveendra Babu, Virginia Military Institute & Virginia Tech, USA</p>
  <p>Dr. Preeti Chandrakar, NIT Raipur, India</p>
  <p>Dr. Prasanto Gope, University of Sheffield, UK</p>
  <p>Dr. Rifaqat Ali, NIT Hamirpur, India</p>
  <p>Dr. Rohit Kumar, Shiv Nadar University, India</p>
  <p>Dr. Saiyed Umer, Alia University, India</p>
  <p>Dr. Sanjeev Kumar Dwivedi, MITS Gwalior, India</p>
  <p>Dr. Shehzad Ashraf Chaudhry, Abu Dhabi University</p>
  <p>Dr. SK Haifzul Islam, IIIT Kalyani, India</p>
  <p>Dr. Sukhpal Singh Gill, Queen Mary University of London, UK</p>
  <p>Dr. Subrata Dutta, NIT Jamshedpur, India</p>
  <p>Dr. Taher Al-Shehari, King Saud University, Saudi Arabia</p>
  <p>Dr. Tanmoy Maitra, KIIT Bhubaneshwar, India</p>
  <p>Dr. Venkanna U, NIT Warangal, India</p>
  <p>Dr. Venkatasamy Sureshkumar, PSG College of Technology, India</p>
        <h3>Advisory Committee</h3><p>------</p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
