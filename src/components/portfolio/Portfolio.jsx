import React, { useEffect } from "react";
import "./portfolio.css";
import gochat from "../../img/gochat-tau.vercel.app_ (1).png";
import gopack from "../../img/GOPack.gif";
import nigtrak from "../../img/nigtrak.png";
import lendSqr from "../../img/Lendsqr-fe-test.png";
import onlineAuction from "../../img/onlineAuction.png";
import expense from "../../img/goit-expenses.netlify.app_.png";
import meetup from "../../img/goit-meetup.netlify.app_.png";
import momasPay from "../../img/goit-momas-pay.netlify.app_.png";
import streamIt from "../../img/goit-streamit.netlify.app_.png";
import hopeAtLast from "../../img/hope-at-last.netlify.app_.png";
import goit from "../../img/onukwilip.github.io_GO-IT_.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const portfolioArray = [
  {
    id: 1,
    name: "GOPack",
    image: gopack,
    githubLink: "https://github.com/onukwilip/gopack",
    demoLink: "https://gopack.vercel.app",
    tech: ["Node Js", "Webpack", "Babel"],
    desc: `GOPack is an open-source JavaScript library built using Node Js, webpack, and babel. It was developed to help javascript developers unfamiliar with webpack bundle their projects into static files using pre-written webpack configuration and pre-installed loaders.`,
  },
  {
    id: 3,
    name: "NigTrak",
    image: nigtrak,
    githubLink: "https://github.com/onukwilip/NigTrak/tree/adding-typescript",
    demoLink: "https://nigtrak.netlify.app",
    tech: ["React Js", "SCSS", "MQTT", "WebSocket", "Google Maps"],
    desc: `NigTrak is a real-time location tracker (UI Only) that tracks registered personnel wherever they are in the world. It was developed for a previous organization. The backend is yet to be integrated into it. It uses React Js and SCSS for the frontend, Node Js and MSSQL for the backend and MQTT and WebSocket for the realtime communication`,
  },
  {
    id: 4,
    name: "OnlineAuction",
    image: onlineAuction,
    githubLink: "https://github.com/onukwilip/onlineAuction",
    demoLink: "https://auction-app-s9qv.onrender.com/",
    tech: ["Next Js", "REST API", "Docker", "MongoDB", "Cloudinary API"],
    desc: `OnlineAuction is an auctioning web application developed for a client on Fiverr, where can sugn-up, create, bid, buy, and sell products`,
  },
  {
    id: 2,
    name: "GOChat",
    image: gochat,
    githubLink: "https://github.com/onukwilip/GOChat-2.0",
    demoLink: "https://gochat-tau.vercel.app",
    tech: [
      "Node Js",
      "Next Js",
      "SCSS",
      "React Js",
      "REST API",
      ".NET",
      "C#",
      "MSSQL",
      "Docker",
      "Git",
    ],
    desc: "This is a chat web application where users from around the world can sign up and communicate with thier family and friends. It was developed using React Js, Next Js and SCSS for the frontend. .NET, C# and MSSQL for it's backend, and Node Js for the web socket. ",
  },
  {
    id: 5,
    name: "LendSQR Dashboard",
    image: lendSqr,
    githubLink: "https://github.com/onukwilip/lendsqr-fe-test",
    demoLink: "http://prince-c-onukwili-lendsqr-fe-test.netlify.app/",
    tech: [
      "React Js",
      "SCSS",
      "Jest",
      "REST API",
      "React testing library",
      "Docker",
      "Git",
    ],
    desc: "This is a UI dashboard/website developed for an interview i had with LendSQR. It was developed using React Js and SCSS for the frontend, Jest and React testing library for Unit and integration tests and Docker for deploying to containers. ",
  },
];

const otherProjects = [
  {
    id: 2,
    image: hopeAtLast,
    githubLink: "#",
    name: "Hope at last",
    demoLink: "https://hope-at-last.netlify.app/",
    tech: ["HTML", "CSS", "Git"],
    desc: "This is a website that was and is currently being developed for charity, using HTML, CSS and Javascript",
  },
  {
    id: 3,
    image: momasPay,
    githubLink: "https://github.com/onukwilip/momas-pay-backup",
    name: "MomasPay",
    tech: ["React Js", "SCSS", "Git"],
    desc: "This is one of the versions of payment web application (UI only) that was and is currently being developed for an organization i worked for. It is an application where customers of the organization can pay for the organization's resources they consume, E.g Power/Energy",
    demoLink: "https://goit-momas-pay.netlify.app/",
  },
  {
    id: 4,
    image: expense,
    githubLink:
      "https://github.com/onukwilip/react-complete-guide-expenses-project",
    name: "Expenses App",
    tech: ["React Js", "CSS", "Git"],
    desc: "This is a website/dummy project that was developed while i was learning React Js, it tracks a user's yearly expenses",
    demoLink: "https://goit-expenses.netlify.app/",
  },
  {
    id: 5,
    image: meetup,
    githubLink: "https://github.com/onukwilip/react-meetup",
    desc: "This is a website/dummy project that was developed while i was learning React Js, it keeps track of one's meetup",
    tech: ["React Js", "CSS", "Git", "Firebase"],
    name: "Meetup App",
    demoLink: "https://goit-meetup.netlify.app/",
  },
  {
    id: 6,
    image: streamIt,
    desc: "This is a website/dummy project that was developed while i was learning React Js, it is a UI clone of Netflix",
    name: "StreamIt",
    tech: ["React Js", "SCSS", "Git"],
    githubLink: "https://github.com/onukwilip/movie-web-app",
    demoLink: "https://goit-streamit.netlify.app/",
  },
  {
    id: 7,
    image: goit,
    name: "GOIT",
    desc: "This is a website that was developed inorder to display my skills and services. (It was my previous portfolio)",
    tech: ["HTML", "CSS", "Git"],
    githubLink: "https://github.com/onukwilip/GO-IT",
    demoLink: "https://onukwilip.github.io/GO-IT/",
  },
];

const Project = (/**@type portfolioArray[0] */ { eachProject }) => {
  const [ref, inView] = useInView();
  const projectNode = document.getElementById(eachProject?.name);

  const addAnimation = () => {
    projectNode?.classList?.add("project-animate-in");
    projectNode?.classList?.remove("project-animate-out");
  };

  const removeAnimation = () => {
    projectNode?.classList?.remove("project-animate-in");
    projectNode?.classList?.add("project-animate-out");
  };

  useEffect(() => {
    if (inView) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }, [inView]);
  return (
    <div className="project" align="center" id={eachProject?.name} ref={ref}>
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
    </div>
  );
};

const OtherProjects = (
  /**@type portfolioArray[0] */ { eachProject, index }
) => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  const variants = {
    initial: {
      x: -300,
    },
    animate: {
      x: 0,
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
        {portfolioArray.map((eachProject) => {
          return <Project key={eachProject.id} eachProject={eachProject} />;
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
