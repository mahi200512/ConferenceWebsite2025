import React, { useState, useEffect } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const ContactUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
        <div
        className="mainTitle-banner-section"
        style={{
          backgroundImage: `url(${bannerImages[currentImage]})`
        }}
      >
       
<div className="logo-left">
  <Link to="/Mainpage">
    <img src="/images/IIITNRlogo.png" alt="Logo1" className="logo" />
  </Link>
</div>

<div className="logo-right">
  <Link to="/Mainpage">
    <img src="/images/ICISS_logo-removebg-preview.png" alt="Logo2" className="logo" />
  </Link>
</div>
        <h1 className="mainTitle-banner-title">
          Contact Us
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
      <p>Have questions? Get in touch with us.</p>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h2>Thank you!</h2>
              <p>We've received your message and will get back to you soon.</p>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Reach Us</h2>
          <p><strong>Email:</strong> contact@conference.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> IIIT Naya Raipur, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
