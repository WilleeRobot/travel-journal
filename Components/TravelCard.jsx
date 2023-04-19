import React from "react";

const TravelCard = ({
  title,
  location,
  maps,
  startDate,
  endDate,
  description,
  image,
}) => {
  return (
    <div className="travel-card">
      <div className="photo-container">
        <img className="photo" src={image} alt="destination image" />
      </div>
      <div className="destination-content">
        <p>
          <img className="icons" src="../assets/pin.jpg" alt="pin-icon" />
          <span className="country">{location}</span>
          <a className="maps-link" href={maps} target="_blank">
            View on Google Maps
          </a>
        </p>
        <h2 className="destination-name">{title}</h2>
        <p className="travel-dates">{`${startDate} - ${endDate}`}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TravelCard;
