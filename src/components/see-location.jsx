import React from "react";
import { locationArray } from "../data";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function SeeLocation() {
  const locations = locationArray.map((item) => {
    return (
      <div key={uuidv4()} className="illustration-div location-div">
        <img src={item.image} alt={item.alt} />
        <p className="illustration-p location-p">{item.location}</p>
        <Link to="/location">
          <button className="hero-button location-btn">
            {`See Location`.toUpperCase()}
          </button>
        </Link>
      </div>
    );
  });
  return <section className="attitudes location-section">{locations}</section>;
}

export default SeeLocation;
