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

const Sponsorship = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   fetch('https://api.countapi.xyz/hit/iciss2026/sponsorships')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data && typeof data.value === 'number') {
  //         setVisitorCount(data.value);
  //       } else {
  //         setVisitorCount('N/A');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Visitor counter error:', error);
  //       setVisitorCount('N/A');
  //     });
  // }, []);

  return (
    <div className="sponsorships-container">
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
            <p>
                    ICISS 2026 seeks to promote the exchange of knowledge, breakthroughs, and practical solutions across academia and industry. By encouraging collaboration and knowledge-sharing among multidisciplinary communities, the conference aspires to drive innovation in intelligent systems and security. It will address current and emerging challenges, while exploring future opportunities in diverse application domains.
      </p>
      <h2>Scope</h2>
      <p>
        ICISS 2026 welcomes original contributions in the form of research papers, case studies, and industry presentations. The conference covers a broad spectrum of topics at the intersection of intelligent systems and security, and encourages submissions that employ multidisciplinary approaches. Contributions may span theoretical research, practical implementations, and novel case applications.
      </p>
      <h2>Publication and Indexing</h2>
      <p>
        All accepted and presented papers will be published in the Lecture Notes in Networks and Systems (LNNS) series (Approval Pending), which is indexed by SCOPUS, INSPEC, WTI Frankfurt EG, ZbMATH, SCImago, and Web of Science.
      </p>
      <h1 className='MainHeading'>About IIIT Naya Raipur</h1>
      <p className="about-description">
        Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur (IIIT-NR) is established under the IIIT University Act, 2013 by the Government of Chhattisgarh. IIIT-NR is a joint venture between the Chhattisgarh State Government and NTPC. The institute is dedicated to excellence in education, research, and innovation in Information Technology and related fields. It emphasizes real-world problem solving, entrepreneurship, and interdisciplinary research through state-of-the-art labs and development centers. Located on a 50-acre lush green campus in the smart city of Naya Raipur, IIIT-NR offers a fully residential experience with Wi-Fi, CCTV, and excellent sports and recreational facilities. The institute currently offers three B.Tech. programs—in Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), and Data Science & Artificial Intelligence (DSAI).
      </p>
    </div>
  );
};

export default Sponsorship;
