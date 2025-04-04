import React from "react";
// import "./DestinationCard.css";
// import "./styles/DestinationCard.css";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <div className="destination-details">
        <h2 className="destination-name">{name}</h2>
        <p className="destination-location">{location}</p>
        <p className="destination-description">{description}</p>
        <p className="destination-price">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;