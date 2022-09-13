import React from "react";
import "./tcard.css";

const TCard = ({ image, text, title }) => {
  return (
    <div className="tcard">
      <img src={image} alt="" />
      <h6>{title}</h6>
      <span>{text}</span>
      <br></br>
      <button>Learn more...</button>
    </div>
  );
};

export default TCard;
