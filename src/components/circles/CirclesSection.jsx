import React, { useEffect, useRef } from "react";
import Circles from "./Circles";
import "./circlesSection.css";
import { useInView } from "react-intersection-observer";

const CirclesSection = () => {
  const [circlesRef, inView] = useInView();
  const circlesId = document.getElementById("Circles");

  const addAnimation = () => {
    circlesId?.classList?.add("c-animate");
  };

  const removeAnimation = () => {
    circlesId?.classList?.remove("c-animate");
  };

  useEffect(() => {
    if (inView) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }, [inView]);

  return (
    <section className="c-main" id="Circles" ref={circlesRef}>
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
