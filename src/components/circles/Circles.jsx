import React from "react";
import "./circles.css";

const Circles = ({ num, head, highlight }) => {
  return (
    <div className="circle">
      <div className="round">
        <span>{num}</span>
      </div>
      <br />
      <p className="head">{head}</p>
      <p className="highlight">{highlight}</p>
    </div>
  );
};

export default Circles;
