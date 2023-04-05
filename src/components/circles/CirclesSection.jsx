import React, { useEffect } from "react";
import Circles from "./Circles";
import "./circlesSection.css";

const CirclesSection = () => {
  return (
    <section className="c-main" id="Circles">
      <div>
        <Circles num={"8+"} head={"Years"} highlight={"Experience"} />
      </div>
      <div>
        <Circles num={"20+"} head={"Completed"} highlight={"Projects"} />
      </div>
      <div>
        <Circles num={"5+"} head={"Companies"} highlight={"Work"} />
      </div>
    </section>
  );
};

export default CirclesSection;
