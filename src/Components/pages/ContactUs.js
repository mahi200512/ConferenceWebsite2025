import React, { useState, useEffect } from 'react';
import '../../App.css';
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
    }, 5000);
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
        style={{ backgroundImage: `url(${bannerImages[currentImage]})` }}
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

      <p className="Git">Have questions? Get in touch with us.</p>

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
          <h2>Contact Us</h2>
          <p><strong>Department:</strong><br />
            Computer Science and Engineering,<br />
            DR SPM IIIT Naya Raipur</p>

          <p><strong>Address:</strong><br />
            Sector 24, Plot No:7, Near Muktangan,<br />
            Chhattisgarh, Pin-493661, India</p>

          <p><strong>General Queries:</strong><br />
            <a href="mailto:iciss@iiitnr.edu.in">iciss2026@iiitnr.ac.in</a></p>

          <p><strong>Conference Email:</strong><br />
            <a href="mailto:iciss2026@iiitnr.edu.in">iciss2026@iiitnr.ac.in</a></p>

          <p><strong>Dr. Ruhul Amin:</strong><br />
            +91 88041 52340</p>

          <p><strong>Dr. Vinay Kumar:</strong><br />
            +91 94546 90527</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
