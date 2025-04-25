import React from "react";
import { useState, useEffect } from 'react';
import "../../App.css"; // Ensure correct CSS file
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const callForPapers = {
  
  description: `The 20th ICISS solicits previously unpublished original research works in the form of research papers typeset in English, using the LNCS template. The submissions must be anonymous (double-blind peer review process will be followed; read the guidelines carefully), compiled as a single PDF file and should not exceed 20 pages, including the bibliography and well-marked appendices. SoK-type of submissions are also welcome; during submission, choose "Research Papers (SoK)" sub-track. Submissions can be done under two distinct tracks: regular research track and industry/demo track. An indicative list of research topics for both tracks is given below.`,
  submissionGuidelines: [
    "Double-blind review process (follow these submission guidelines). No author name/affiliation, 20-page limit.",
    "Proceedings will be published by Springer LNCS (prepare your manuscript using this LaTeX template).",
    "TPC may recommend exceptionally good quality papers for their journal version (e.g., Sadhana).",
    "TPC may recommend shortening some papers with incomplete results but are interesting (8 pages long).",
    "Submission Deadline: July 31, 2024 (AoE) [Firm Deadline].",
    "Announcement of Results: October 10, 2024.",
    "Camera-Ready Submission: October 15, 2024.",
  ],
  topics: [
    "Systems Security: OS, VM, containerization, SDN, NFV, SD-WAN, IoT, IDS, IPS, etc.",
    "AI/ML Security: Adversarial learning, Bias, Ethics, Explainability, Model poisoning.",
    "Hardware Security: Remote attestation, PUFs, Trojans, Trusted Execution Enclaves.",
    "Privacy: PETs, Anonymization, Inference attacks, Censorship.",
    "Blockchain: Cryptocurrency, Smart contracts, NFTs, CBDCs.",
    "Access Control: Authentication, MFA, PKI, Trust management.",
    "Application Security: DevSecOps, Malware, Ransomware, APTs.",
    "Emerging Technologies: ChatGPT, LaMDA, OSINT, SBOM.",
  ],
};

const acceptedPapers = [
  { id: "010", title: "REMEDII: Robust Malware Detection with Iterative and Intelligent Adversarial Training using GANs", authors: "Gupta, Kumar" },
  { id: "027", title: "Microarchitectural Security of Firecracker VMM for Serverless Cloud Platforms", authors: "Weissman, Tiemann, Eisenbarth, Sunar" },
  { id: "034", title: "Insights from Running 24 Static Analysis Tools on Open Source Software Repositories", authors: "Hashmat, Alwaleed Aljaali, Shen, Machiry" },
  { id: "035", title: "Protecting ownership of trained DNN models with Zero-Knowledge Proofs", authors: "Sato, Tanaka" },
  { id: "038", title: "Securing the Web: Analysis of HTTP Security Headers in Popular Global Websites", authors: "Kishnani, Das" },
  { id: "041", title: "Web Privacy Perceptions Amongst Indian Users", authors: "Kancherla, Dey, Saxena, Saroj, Bichhawat" },
  { id: "050", title: "Semantics-Based Static Vulnerability Detection of Solidity Using Abstract Interpretation", authors: "Kushwaha, Pandey, Halder, Mukherjee" },
  { id: "051", title: "Paving the Way: Advancing V2X Safety Through Innovative Attack Generation and Analysis Framework (V2X-SAF)", authors: "Tomar, Tripathi, Yadav, Singh" },
  { id: "053", title: "From Traits to Threats: Learning Risk Indicators of Malicious Insider using Psychometric Data", authors: "Nanamou, Neal, Boulahia-Cuppens, Cuppens, Bkakria" },
  { id: "054", title: "Countering Subscription Concealed Identifier (SUCI)-Catchers in Cellular Communications", authors: "Parkin, Tripunitara" },
  { id: "056", title: "An OS support for Tamper-resistant Software Execution Using Empty Interruptions", authors: "Kato, Koyanagi, Ukezono" },
  { id: "060", title: "BP-MAP: A Secure and Convenient Mutual Authentication Protocol", authors: "Narumanchi, Maddali, N" },
  { id: "063", title: "S-RFUP: Secure Remote Firmware Update Protocol", authors: "Podder, Rios, Ray, Raman" },
  { id: "065", title: "Patch based backdoor attack on Deep Neural Networks", authors: "Manna, Tripathy" },
  { id: "072", title: "MALAI: ML-based Attack on Learning With Error problem", authors: "Suma Sri, Yadav, Sanyashi, Singh" },
  { id: "076", title: "Making EULA Great Again: A Novel Nudge Mechanism to Improve Readability, User Attention and Awareness", authors: "Bin Zahid, Ghosh Bristy, Hasan Oli, Fahim, Ahmed Rumee, Zaber" },
  { id: "078", title: "Securing Virtual Reality Apps Inter-Process Communication", authors: "Falebita, Ray, Abdelgawad, Anspach" },
  { id: "081", title: "A Decoupling Mechanism for Transaction Privacy", authors: "Patil, Shyamasundar" },
];

const Papers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
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
             <img src="/images/ICISS_logo-removebg-preview.png" alt="Logo2" className="logo" />
           </Link>
         </div>
        <h1 className="mainTitle-banner-title">
          20th International Conference on Information Systems Security
        </h1>
      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
          <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/proceedings">📘 Online Proceedings</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li>
          <li><a href="/query">📍 Queries</a></li>
          <li><a href="/FAQs">📍 Frequently asked questions</a></li>
          <li><a href="/commitee">📍 Commitee members</a></li>
        </ul>
      </div>

      <p>{callForPapers.description}</p>

      <h2>Submission Guidelines</h2>
      <ul>
        {callForPapers.submissionGuidelines.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h2>Topics of Interest</h2>
      <ul>
        {callForPapers.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <h1>Accepted Papers</h1>
      <div className="accepted-papers-table">
        {acceptedPapers.map((paper, index) => (
          <div className="paper-card" key={index}>
            <div><strong>ID:</strong> {paper.id}</div>
            <div><strong>Title:</strong> {paper.title}</div>
            <div><strong>Authors:</strong> {paper.authors}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Papers;
