
import React, { useState, useEffect } from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const Schedule = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  const [selectedDay, setSelectedDay] = useState(1); // Default to Day 1

  const scheduleData = {
    1: [
      { time: '09:00 AM', event: 'Registration & Breakfast', speaker: 'N/A' },
      { time: '10:00 AM', event: 'Opening Ceremony', speaker: 'Conference Chair' },
      { time: '10:30 AM', event: 'Keynote Speech', speaker: 'Dr. John Doe' },
      { time: '11:30 AM', event: 'Technical Session 1', speaker: 'Prof. Alice Smith' },
      { time: '01:00 PM', event: 'Lunch Break', speaker: 'N/A' },
      { time: '02:00 PM', event: 'Panel Discussion: Future of AI', speaker: 'Industry Experts' },
      { time: '03:30 PM', event: 'Workshop on Cybersecurity', speaker: 'Mr. James Lee' },
      { time: '05:00 PM', event: 'Closing Remarks & Awards', speaker: 'Organizing Committee' },
    ],
    2: [
      { time: '09:30 AM', event: 'Networking Session', speaker: 'All Attendees' },
      { time: '10:00 AM', event: 'Guest Lecture: Quantum Computing', speaker: 'Dr. Sophia Tan' },
      { time: '11:30 AM', event: 'Technical Session 2', speaker: 'Dr. Robert Brown' },
      { time: '01:00 PM', event: 'Lunch Break', speaker: 'N/A' },
      { time: '02:00 PM', event: 'Hackathon Kickoff', speaker: 'Tech Committee' },
      { time: '04:30 PM', event: 'Industry Panel: AI Ethics', speaker: 'Experts' },
      { time: '06:00 PM', event: 'Networking & Social Night', speaker: 'All Attendees' },
    ],
    3: [
      { time: '09:30 AM', event: 'Startup Pitch Competition', speaker: 'Investors Panel' },
      { time: '11:00 AM', event: 'Final Presentations', speaker: 'Judging Panel' },
      { time: '01:00 PM', event: 'Lunch Break', speaker: 'N/A' },
      { time: '02:00 PM', event: 'AI for Social Good - Panel Discussion', speaker: 'Guest Speakers' },
      { time: '04:00 PM', event: 'Award Ceremony', speaker: 'Organizing Committee' },
      { time: '05:00 PM', event: 'Closing Speech & Future Roadmap', speaker: 'Conference Chair' },
    ],
  };

  return (
    <div className="schedule-container">
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
          Paper Submissions
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
      
      {/* Tabs for Selecting Days */}
      <div className="schedule-tabs">
        <button 
          className={selectedDay === 1 ? 'active' : ''}
          onClick={() => setSelectedDay(1)}>Day 1</button>
        <button 
          className={selectedDay === 2 ? 'active' : ''}
          onClick={() => setSelectedDay(2)}>Day 2</button>
        <button 
          className={selectedDay === 3 ? 'active' : ''}
          onClick={() => setSelectedDay(3)}>Day 3</button>
      </div>

      {/* Schedule Table */}
      <div className="schedule-table">
        {scheduleData[selectedDay].map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="time">{item.time}</div>
            <div className="event">{item.event}</div>
            <div className="speaker">{item.speaker}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
