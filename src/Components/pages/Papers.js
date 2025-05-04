import React, { useState, useEffect } from "react";
import "../../App.css"; // Ensure correct CSS file
import { Link } from 'react-router-dom';

const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];

const Papers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('trackA');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="papers-container">
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
        <h1 className="mainTitle-banner-title"></h1>
        <h1 className="mainTitle-banner-title">
        Second International Conference on Information Systems and Security (ICISS 2026)
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

      <div className="call-for-papers">
        <h2>Call for Papers</h2>
        <h3>“ICISS 2026: Innovate, Collaborate, and Secure the Future of Intelligent Systems”</h3>

        <h4>ICISS 2026 Conference Highlights:</h4>
        <ul className="highlights-list">
          <li>Accepted papers to be published in LNNS (Springer, SCOPUS-indexed) with a chance for enhanced journal publication.</li>
          <li>Connect with leading researchers, industry experts, and practitioners from around the world.</li>
          <li>Participation certificate will be issued to all the registered participants.</li>
          <li>Best Paper Awards will be given in each track.</li>
        </ul>

        <p>Authors are invited to submit full-length original articles presenting their research results, project developments, experimental studies, or industrial experiences that showcase significant advancements in the following areas, but are not limited to:</p>

        <div className="tabs">
          <button className={activeTab === 'trackA' ? 'active' : ''} onClick={() => handleTabClick('trackA')}>
            Track A
          </button>
          <button className={activeTab === 'trackB' ? 'active' : ''} onClick={() => handleTabClick('trackB')}>
            Track B
          </button>
          <button className={activeTab === 'trackC' ? 'active' : ''} onClick={() => handleTabClick('trackC')}>
            Track C
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'trackA' && (
            <div className="track">
              <h5>Intelligent Systems and Applications</h5>
              <ul>
                <li>Artificial intelligence (AI) and machine learning (ML) algorithms and techniques</li>
                <li>Intelligent data analysis and decision support systems</li>
                <li>Natural language processing and understanding</li>
                <li>Computer vision and pattern recognition</li>
                <li>Robotics and autonomous systems</li>
                <li>Internet of Things (IoT) and intelligent systems integration</li>
                <li>Intelligent system for space application</li>
                <li>Intelligent system for remote sensing and GIS</li>
                <li>AI in Healthcare, Finance, and Education</li>
                <li>Explainable AI (XAI) and Model Interpretability</li>
                <li>Data Mining and Knowledge Discovery</li>
                <li>AI for Social Good and Sustainable Development</li>
                <li>Cloud and Edge AI Architectures</li>
                <li>Anomaly Detection and Pattern Recognition</li>
                <li>Time Series Analysis and Temporal Data Modeling</li>
              </ul>
            </div>
          )}

          {activeTab === 'trackB' && (
            <div className="track">
              <h5>Security and Privacy</h5>
              <ul>
                <li>Cybersecurity</li>
                <li>Computational number theory</li>
                <li>Security in Blockchain</li>
                <li>Network and system security</li>
                <li>Cryptography and secure communications</li>
                <li>Quantum cryptography</li>
                <li>Physical layer security</li>
                <li>Privacy-preserving technologies and anonymization techniques</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Threat intelligence and information sharing</li>
                <li>Security in cloud computing, big data, and IoT environments</li>
                <li>Blockchain Technology</li>
                <li>Security in Payment System</li>
                <li>Explainable AI (XAI) for Security</li>
                <li>AI-Driven Risk Management</li>
                <li>Secure Federated Learning and Privacy-Preserving AI</li>
                <li>Post-Quantum Cryptography (PQC) and AI Integration</li>
                <li>Human-Centric Security and Privacy</li>
                <li>Ethical Hacking and AI Red-Teaming</li>
                <li>Zero Trust Architectures (ZTA) for Intelligent Systems</li>
                <li>Adversarial AI and Robustness</li>
                <li>Intelligent Threat Intelligence Systems</li>
                <li>Cyber Deception and Intelligent Honeypots</li>
                <li>Autonomous Security Operations Centers</li>
              </ul>
            </div>
          )}

          {activeTab === 'trackC' && (
            <div className="track">
              <h5>Emerging Trends in Intelligent and Security Systems</h5>
              <ul>
                <li>Explainable AI (XAI) for Security</li>
                <li>AI-Driven Risk Management</li>
                <li>Digital Twin</li>
                <li>Secure Federated Learning and Privacy-Preserving AI</li>
                <li>Post-Quantum Cryptography (PQC) and AI Integration</li>
                <li>Human-Centric Security and Privacy</li>
                <li>Ethical Hacking and AI Red-Teaming</li>
                <li>Zero Trust Architectures (ZTA) for Intelligent Systems</li>
                <li>Adversarial AI and Robustness</li>
                <li>Intelligent Threat Intelligence Systems</li>
                <li>Cyber Deception and Intelligent Honeypots</li>
                <li>Autonomous Security Operations Centers</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Papers;
