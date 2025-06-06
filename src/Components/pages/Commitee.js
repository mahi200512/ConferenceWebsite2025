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
        Second International Conference on Intelligent Systems and Security
         <h1 className="mainTitle-banner-title">(ICISS 2026)</h1>
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
      
      
      <h2 className="committee-heading"> Committee</h2>
      <div className='Committees'>
      
        <div className='com1'><h3>Chief-Patron</h3><p>Shri S. Bharathi Dasan, Director (I/C), IIIT-Naya Raipur</p>
        <h3>Patron(s)</h3><p>Dr. Srinivasa K.G. IIIT Naya Raipur</p>
        <p>Dr. Mithilesh K. Choube, IIIT Naya Raipur</p>
        
        <h3>General Chair</h3>
        <p>Satyanarayana Vollala, IIIT Naya Raipur</p>
        <p>Santosh Kumar, IIIT Naya Raipur</p>

        <h3>Program Chair(s)</h3>
        <p>Frank Dignum, Umea University, Umea, Sweden</p>
        <p>Debasis Giri, MAKAUT, India</p>
        <p>Sangram Ray, NIT Sikkim, India</p>
        <p>Sanasam Ranbir Singh, IIT Guwahati, India</p>
        <p>Arup Kumar Pal, IIT(ISM) Dhanbad, India</p>

        <h3>Publication  Chair</h3>
        <p>Shyamalendu Kandar, IIEST Shibpur, India</p>
        <p>Ruhul Amin, IIIT Naya Raipur, India</p>

        <h3>Organizing Chair</h3>
        <p>Ruhul Amin, IIIT Naya Raipur</p>
        <h3>Organizing Secretary</h3>
        <p>Vinay Kumar, IIIT Naya Raipur</p>
        
        <h3>Publicity Chair</h3>
        <p>Mayukh Sarkar, NIT Jamshedpur</p>
        <p>Goutham Alavalapati,  University of Illinois</p>
        <p>Debasis Das, IIT Jodhpur</p>
        <p>Karan Singh, JNU</p>
        <p>Arijit Karati, NSYU</p>
       
       
        <h3>Sponsorship Committee</h3>
        <p>Ruhul Amin, IIIT Naya Raipur</p>
        
        <h3>Website Management Committee</h3>
        <p>Abir Bhattacharya, IIIT Naya Raipur</p>
        <p>Parvinder Singh, IIIT Naya Raipur</p>
        <p>Thakur Mahima Nuruti, IIIT Naya Raipur</p>
        <p>Anshumaan Karna, IIIT Naya Raipur</p>
        
        <h3>Local Organizing Committee</h3>
        <p>Punya P. Paltani, IIIT Naya Raipur</p>
<p>Shrivishal Tripathi, IIIT Naya Raipur</p>
<p>Sresha Yadav, IIIT Naya Raipur</p>
<p>Manoj Kumar Majumder, IIIT Naya Raipur</p>
<p>Maifuz Ali, IIIT Naya Raipur</p>
<p>Amit Kumar Agrawal, IIIT Naya Raipur</p>
<p>Anurag Singh, IIIT Naya Raipur</p>
<p>Ramakrishna Bandi, IIIT Naya Raipur</p>
<p>Vijaya J, IIIT Naya Raipur</p>
<p>Lakhindar Murmu, IIIT Naya Raipur</p>
<p>Deepika Gupta, IIIT Naya Raipur</p>
<p>Avantika Singh, IIIT Naya Raipur</p>
<p>Abhishek Sharma, IIIT Naya Raipur</p>
<p>Shailesh Khapre, IIIT Naya Raipur</p>
<p>Bipin Chandra Mandi, IIIT Naya Raipur</p>

        </div><div className='com1'><h3>Technical Program Committee</h3>
        <p>Abhisekh Das, Alia University, India</p>
  <p>Alekha Kumar Mishra, NIT Jamshedpur, India</p>
  <p>Alavalapati Goutham Reddy, University of Illinois, USA</p>
  <p>Alawi A. Al-saggaf, KFUPM, Saudi Arabia</p>
  <p>Bimal Kumar Meher, Silicon University, India</p>
  <p>Cheng-Chi Lee, Fu Jen Catholic University, Taiwan</p>
  <p>Chien-Ming Chen, Shandong University of Science and Technology, China</p>
  <p>Debanjan Das, IIT Kharagpur, India</p>
  <p>Debiao He, Wuhan University, China</p>
  <p>Dhreendra Mishra, MANIT Bhopal, India</p>
  <p>Gopa Bhaumik, NIT Jamshedpur, India</p>
  <p>Kinsuk Giri, NITTTR Kolkata, India</p>
  <p>Mayukh Sarkar, NIT Jamshedpur, India</p>
  <p>Md Azharuddin, Alia University, India</p>
  <p>Mohd Shameem, KFUPM, Saudi Arabia</p>
  <p>Mohammad Abdussami, SRM University, India</p>
  <p>Mohammad Shariq, United Arab Emirates University, UAE</p>
  <p>Mou Dasgupta, NIT Raipur, India</p>
  <p>M. Brindha, NIT Trichy, India</p>
  <p>Naeem Ahmad, NIT Raipur, India</p>
  <p>Neetesh Saxena, Georgia Institute of Technology, Atlanta, USA</p>
  <p>Neha Agrawal, IIIT Sri City, India</p>
  <p>Nitin Gupta, NIT Hamirpur, India</p>
  <p>Odelu Vanga, IIIT Chittoor, India</p>
  <p>Ponnuru Raveendra Babu, Virginia Military Institute & Virginia Tech, USA</p>
  <p>Preeti Chandrakar, NIT Raipur, India</p>
  <p>Prasanto Gope, University of Sheffield, UK</p>
  <p>Rifaqat Ali, NIT Hamirpur, India</p>
  <p>Rohit Kumar, Shiv Nadar University, India</p>
  <p>Saiyed Umer, Alia University, India</p>
  <p>Sanjeev Kumar Dwivedi, MITS Gwalior, India</p>
  <p>Shehzad Ashraf Chaudhry, Abu Dhabi University</p>
  <p>SK Haifzul Islam, IIIT Kalyani, India</p>
  <p>Sukhpal Singh Gill, Queen Mary University of London, UK</p>
  <p>Subrata Dutta, NIT Jamshedpur, India</p>
  <p>Taher Al-Shehari, King Saud University, Saudi Arabia</p>
  <p>Tanmoy Maitra, KIIT Bhubaneshwar, India</p>
  <p>Venkanna U, NIT Warangal, India</p>
  <p>Venkatasamy Sureshkumar, PSG College of Technology, India</p>
  <p>Ashok Kumar Pradhan, SRM-AP, India</p>
       
        <h3>Advisory Committee</h3>
        <p>Rajkumar Buyya, University of Melbourne, Australia</p>
        <p>Vincenzo Puri, University of Milan, Italy</p>
        <p>Youngho Park, Kyungpook National University, Daegu, South Korea.</p>
        <p>Mohammad S. Obaidat,  University of Jordan, Amman, Jordan</p>
        <p>Sukumar Nandi, IIT Guwahati, India</p>
        <p>Rajarshi Mahapatra, IIIT Naya Raipur</p>
        <p>Muhammad Khurram Khan, King Saud University, Saudi Arabia</p>
        <p>D. A. Khan, NIT Jamshedpur, India</p>
        <p>Kim-Kwang Raymond Choo, University of Texas, USA</p>
        <p>Debiao He, Wuhan University, China</p>
        <p>Ashok Kumar Das, IIIT Hyderabad, India</p>
        <p>Chiranjeev Kumar, IIT(ISM) Dhanbad, India</p>
        <p>Santosh Biswas, IIT Bhilai, India</p>
        <p>Archana Sharma, IIIT Naya Raipur, India</p>

        
        </div>
      </div>
    </div>
  );
};

export default Committee;
