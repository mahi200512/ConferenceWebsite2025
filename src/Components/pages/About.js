import React from "react";
import "../../App.css";

 // Separate CSS file for animations

const About = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setIsVisible(true), 200); // Delayed fade-in effect
  // }, []);

  return (
    <div className="about-container">
      <div className="about-banner-section">
        <h1 className="about-banner-title">ABOUT ICISS CONFERENCE</h1>
      </div>

      
      <p className="about-description">
        The ICISS Conference is a premier international platform for information security research and practice. Hosted annually in India between <strong>December 16-20</strong>, it brings together leading researchers and industry experts to share cutting-edge discoveries and use-case experiences.
      </p>
      <p className="about-highlight">
        <strong>Next Edition:</strong> ICISS 2024 will be hosted by <em>LNMIIT Jaipur</em>.
      </p>
      <div className="about-past-editions">
        <h2 className="past-title">Past Hosts</h2>
        <ul>
          <li>2023 – NIT Raipur</li>
          <li>2022 – IIT Tirupati</li>
          <li>2021 – IIT Patna</li>
          <li>2020 – IIT Jammu</li>
          <li>2019 – IDRBT Hyderabad</li>
          <li>2018 – IISc Bengaluru</li>
          <li>2017 – IIT Bombay</li>
          <li>2016 – Manipal University Jaipur</li>
          <li>2015 – Jadavpur University Kolkata</li>
          <li>... and many more!</li>
        </ul>
      </div>
      <a
        href="https://link.springer.com/conference/iciss"
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
      >
        View Proceedings on Springer
      </a>
    </div>
  );
};

export default About;
