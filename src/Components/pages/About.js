import { useState, useEffect } from 'react';
import React from "react";
import "../../App.css";
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg',
  '/images/junglesafari.jpg'
];
const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [visitorCount, setVisitorCount] = useState(null);


  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/iciss2026/homepage')

      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          setVisitorCount(data.value);
        } else {
          console.warn('Unexpected CountAPI response:', data);
          setVisitorCount('N/A');
        }
      })
      .catch((error) => {
        console.error('Visitor counter error:', error);
        setVisitorCount('N/A');
      });
  }, []);
      


  return (
    <div className="about-container">
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
          <div className="banner-bottom-left">
          Conference: 14–16 January 2026 
  </div>

  <div className="banner-bottom-right">
    Submission Deadline: 14th August, 2025
  </div>
           </div>
           
      <div className="scrolling-strip">
        <ul className="scrolling-list">
       
        <li><a href="/Schedule">📅 Conference Date: 14-16 January, 2026</a></li>
        <li><a href="/Schedule">📅 Deadline:14th August, 2025</a></li>
        <li><a href="https://link.springer.com/book/9789819642724">Proceeding of ICISS 2024</a></li>  
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>        
        </ul>
      </div>
      <h1 className='MainHeading'>International Conference on Intelligent Systems and Security (ICISS 2026)</h1>
      <p className="about-description" data-aos="fade-right">
      
      <p style={{ textAlign: "center" }}>
        <a
          href="https://link.springer.com/book/9789819642724"
          style={{ color: "red", textDecoration: "none" }}
        >
          <b>Proceedings of ICISS 2024 </b>
        </a>
      </p>

      <p>The International Conference on Intelligent Systems and Security (ICISS 2026) aims to bring together leading researchers, industry professionals, and practitioners from around the globe to share insights, foster collaboration, and explore advancements in the fields of intelligent systems and security. This premier event offers a dynamic platform for networking, knowledge exchange, and the development of innovative ideas and future partnerships.</p>

<p><b>Conference Aim:</b><br/>
ICISS 2026 seeks to promote the exchange of knowledge, breakthroughs, and practical solutions across academia and industry. By encouraging collaboration and knowledge-sharing among multidisciplinary communities, the conference aspires to drive innovation in intelligent systems and security. It will address current and emerging challenges, while exploring future opportunities in diverse application domains.</p>

<p><b>Scope:</b><br/>
ICISS 2026 welcomes original contributions in the form of research papers, case studies, and industry presentations. The conference covers a broad spectrum of topics at the intersection of intelligent systems and security, and encourages submissions that employ multidisciplinary approaches. Contributions may span theoretical research, practical implementations, and novel case applications.</p>

<p><b>Publication and Indexing:</b><br/>
All accepted and presented papers will be published in the Lecture Notes in Networks and Systems (LNNS) series (Approval Pending), which is indexed by SCOPUS, INSPEC, WTI Frankfurt EG, ZbMATH, SCImago, and Web of Science.</p>

</p>
      <p className="about-highlight" data-aos="fade-left">
      <h1 className='MainHeading'>About IIIT Naya Raipur: </h1>
      <p className="about-description2" data-aos="fade-right">
      Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur (IIIT-NR) Established under the IIIT University Act, 2013 by the Government of Chhattisgarh, IIIT-NR is a joint venture between the Chhattisgarh State Government and NTPC. The institute is dedicated to excellence in education, research, and innovation in Information Technology and related fields. It emphasizes real-world problem solving, entrepreneurship, and interdisciplinary research through state-of-the-art labs and development centers. Located on a 50-acre lush green campus in the smart city of Naya Raipur, IIIT-NR offers a fully residential experience with Wi-Fi, CCTV, and excellent sports and recreational facilities. The institute currently offers three B.Tech. programs—in Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), and Data Science & Artificial Intelligence (DSAI). These credit-based, Fractal Curriculum-driven programs are designed to blend foundational knowledge with innovation and industry relevance.
      </p></p>
        <div className="visitor-badge" style={{ textAlign: 'center', margin: '2rem auto' }}>
  👁️ Visitors: {visitorCount === null ? 'Loading...' : visitorCount}
</div>

    </div>
  );
};

export default About;
