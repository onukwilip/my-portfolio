import React, { useEffect } from "react";
import "./portfolio.css";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { otherProjects, portfolioArray } from "../../data";

const Project = (/**@type portfolioArray[0] */ { eachProject, index }) => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  const variants = {
    initialLeft: {
      x: 150,
      opacity: 0.5,
    },
    initialRight: {
      x: -150,
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const isEven = index % 2 === 0;

  const addAnimation = () => {
    control.start("animate");
  };

  const removeAnimation = () => {
    if (isEven) {
      control.start("initialRight");
    } else {
      control.start("initialLeft");
    }
  };

  useEffect(() => {
    if (inView) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }, [inView]);
  return (
    <motion.div
      className="project"
      align="center"
      id={eachProject?.name}
      ref={ref}
      variants={variants}
      initial={isEven ? "initialRight" : "initialLeft"}
      animate={control}
    >
      <div className="img-container">
        <img src={eachProject?.image} alt="" />
      </div>
      <div className="content-container">
        <div className="header">
          <em>Featured Project</em>
          <em>{eachProject?.name}</em>
        </div>
        <div className="content">{eachProject?.desc} </div>
        <div className="tech">
          {eachProject?.tech?.map((eachTech) => (
            <>
              <em href="">{eachTech}</em>
            </>
          ))}
        </div>
        <div className="actions">
          <a href={eachProject?.githubLink}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={eachProject?.demoLink}>
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const OtherProjects = (
  /**@type portfolioArray[0] */ { eachProject, index }
) => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  const variants = {
    initial: {
      x: -150,
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    hover: {
      scale: 1.05,
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
    <motion.div
      variants={variants}
      initial="initial"
      animate={control}
      ref={ref}
      className="other-project"
      transition={{ delay: index / 70 }}
      whileHover="hover"
    >
      <div className="actions-container">
        <a href={eachProject?.githubLink} target="_blank">
          <i class="fa-regular fa-folder"></i>
        </a>
        <div className="actions">
          <a href={eachProject?.githubLink} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={eachProject?.demoLink} target="_blank">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="header">{eachProject?.name}</div>
        <div className="content">{eachProject?.desc}</div>
      </div>
      <div className="tech">
        {eachProject?.tech?.map((eachTech) => (
          <>
            <em href="">{eachTech}</em>
          </>
        ))}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="p-contain" id="Portfolio">
      <section className="p-main">
        <div className="head">
          <h2>Featured Projects</h2>
          <h1 className="highlight">I've developed</h1>
        </div>
        <br />
      </section>
      <div>
        {portfolioArray.map((eachProject, i) => {
          return (
            <Project key={eachProject.id} eachProject={eachProject} index={i} />
          );
        })}
      </div>
      <br />
      <br />
      <section className="p-main">
        <div className="head">
          <h2>Other Noteworthy</h2>
          <h1 className="highlight">Projects</h1>
        </div>
        <br />
      </section>
      <div className="other-projects-container">
        {otherProjects.map((eachProject, i) => {
          return (
            <OtherProjects
              key={eachProject.id}
              index={i}
              eachProject={eachProject}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
