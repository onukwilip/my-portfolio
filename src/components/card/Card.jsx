import React from "react";

const Card = ({ image, desc }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <span style={{ color: "black" }}>{desc}</span>
    </div>
  );
};

export default Card;
