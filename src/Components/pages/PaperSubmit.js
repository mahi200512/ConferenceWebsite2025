import { useState, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"; 
import { Button } from '../Button';
// Ensure this is correctly linked or use Committee.css if separate
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const PaperSubmit = () => {
    const [currentImage, setCurrentImage] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
          }, 5000); // Change every 5 seconds
      
          return () => clearInterval(interval);
        }, []);
  return (
    
    <div className="paper-submissions-container">
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
        Second International Conference on Intelligent Systems and Security (ICISS 2026)
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
      <h1 className='Authguideline'>Author's Guidelines</h1>
      <ol className='AuthRules'>
        <li>Each paper must be original and unpublished work, not submitted for publication elsewhere. Authors are responsible for avoiding any copyright infringement issues. Papers should be written in good English.</li>
        <li>Submissions must be anonymous, without author name(s), affiliation(s), acknowledgments, or obvious references in LNNS Format (Word, LaTeX).</li>
        <li>The recommended font size is 11 points, and reasonable margins should be used.</li>
        <li>Authors are encouraged to follow the given guidelines when preparing their submissions. The papers must be in PDF format and should be submitted electronically through the CMT platform.</li>
        <li>All submitted papers that adhere to the submission guidelines will undergo evaluation. The evaluation criteria include originality, technical and/or research content/depth, correctness, relevance to the conference, contributions, and readability.</li>
        <li>Authors are expected to ensure that the similarity index of their submitted paper remains below the threshold of 15%.</li>
        <li>The authors of accepted papers will have an opportunity to make corrections based on the suggestions of the reviewers. They must submit the final camera-ready versions of their papers within the specified deadline.</li>
        <li>Kindly note that the permissible page length for manuscript submissions is limited to 12 pages. In the event of exceeding this limit, an additional charge of INR 500 per page or $10 per page will apply. The maximum page count with the surcharge is set at 15 pages.</li>
        <li>Follow the authors instructions in the Information for Authors of Springer Proceedings. Relevant Word and LaTeX templates can be found from <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">here</a>.</li>
        <li>Click here for Paper format (.Doc and Latex) file <a href="https://drive.google.com/drive/folders/1KGhe9T_0NyeyQ6r7AtDTw6T6w7p0Y-N8?usp=drive_link">here</a>.</li>

      <li><b>Acknowledgments:</b> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. </li>

        
      </ol>


      <h1 className='Authguideline'>Submit Your Paper</h1>
      <ol className='AuthRules'>
      The authors are pleasingly invited to submit the full paper of their original, unpublished, 
      research contribution which is not currently under review by another conference or journal. 
      Only the accepted and registered papers will be allowed to present at the conference. <b> Submissions for the conference must be made online using CMT Portal.</b>
      <div className="button-wrapper">
  <Button
    buttonStyle="btn--primary"
    buttonSize="btn--large"
    href="https://cmt3.research.microsoft.com/ICISS2026"
  >
    Submit Your Paper
  </Button>
</div>


        </ol>

                   
        </div>

        

        
  );
};
export default PaperSubmit;