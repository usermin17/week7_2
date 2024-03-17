// DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard; // Ensure to export the component as default
