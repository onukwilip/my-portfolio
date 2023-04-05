import React, { useEffect } from "react";
import Circles from "./Circles";
import "./circlesSection.css";

const CirclesSection = () => {
  return (
    <section className="c-main" id="Circles">
      <div>
        <Circles num={"30+"} head={"GitHub"} highlight={"Repositories"} />
      </div>
      <div>
        <Circles num={"500+"} head={"LinkedIn"} highlight={"Connections"} />
      </div>
      <div>
        <Circles num={"5+"} head={"Industry level"} highlight={"Projects"} />
      </div>
    </section>
  );
};

export default CirclesSection;
