import '../../App.css'
import React, { useState } from 'react';


const ContactUs = () => {
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
      <div className="about-banner-section">
        <h1 className="about-banner-title">CONTACT US</h1>
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
