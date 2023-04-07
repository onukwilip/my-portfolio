import React, { useEffect, useRef } from "react";
import Circles from "./Circles";
import "./circlesSection.css";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const CirclesSection = () => {
  const [circlesRef, inView] = useInView();
  const circlesId = document.getElementById("Circles");
  const control = useAnimation();

  const variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const addAnimation = () => {
    control.start("animate");
  };

  const removeAnimation = () => {
    control.start("initial");
  };

  useEffect(() => {
    if (inView) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }, [inView, control]);

  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate={control}
      className="c-main"
      id="Circles"
      ref={circlesRef}
    >
      <div>
        <Circles num={"30+"} head={"GitHub"} highlight={"Repositories"} />
      </div>
      <div>
        <Circles num={"500+"} head={"LinkedIn"} highlight={"Connections"} />
      </div>
      <div>
        <Circles num={"5+"} head={"Industry level"} highlight={"Projects"} />
      </div>
    </motion.section>
  );
};

export default CirclesSection;
