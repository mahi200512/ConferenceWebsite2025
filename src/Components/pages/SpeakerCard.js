import React from 'react';
import './SpeakerCard.css';

const SpeakerCard = ({ image, name, organization, title, abstract, webpage }) => (
  <div className="speaker-card">
    <div className="speaker-image-container">
      <img className="speaker-image" src={image} alt={name} />
    </div>
    <div className="speaker-info">
      <h3 className="speaker-name">{name}</h3>
      <p className="speaker-organization">{organization}</p>
      <p className="speaker-title">{title}</p>
      <p className="speaker-abstract">{abstract}</p>
      <a href={webpage} className="speaker-webpage" target="_blank" rel="noopener noreferrer">Visit Webpage</a>
    </div>
  </div>
);

export default SpeakerCard;
