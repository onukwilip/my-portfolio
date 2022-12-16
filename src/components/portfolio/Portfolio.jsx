import React from "react";
import "./portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import gochat from "../../img/gochat-tau.vercel.app_ (1).png";
import expense from "../../img/goit-expenses.netlify.app_.png";
import meetup from "../../img/goit-meetup.netlify.app_.png";
import momasPay from "../../img/goit-momas-pay.netlify.app_.png";
import streamIt from "../../img/goit-streamit.netlify.app_.png";
import hopeAtLast from "../../img/hope-at-last.netlify.app_.png";
import goit from "../../img/onukwilip.github.io_GO-IT_.png";
import { useState } from "react";

const Project = ({ eachProject }) => {
  const [showAll, setShowAll] = useState(false);
  const toogle = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className="projects" key={eachProject.id} align="center">
      <div className="img-container">
        <img src={eachProject.image} alt="" />
        <div className="overlay">{eachProject?.name}</div>
      </div>
      <div className="description">
        {eachProject.desc?.length < 100 ? (
          eachProject.desc
        ) : (
          <>
            {showAll ? eachProject.desc : eachProject.desc.substring(0, 100)}
            <em
              onClick={toogle}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                fontStyle: "normal",
                fontSize: 16,
              }}
            >
              {" "}
              ...{showAll ? "See less" : "See more"}
            </em>
          </>
        )}
      </div>
      <div className="links">
        <a href={eachProject.githubLink} target="_blanc">
          <button>Github Link</button>
        </a>
        <a href={eachProject.demoLink} target="_blanc">
          <button>View Demo</button>
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioArray = [
    {
      id: 1,
      name: "GOChat",
      image: gochat,
      githubLink: "https://github.com/onukwilip/GOChat-2.0",
      demoLink: "https://gochat-tau.vercel.app",
      desc: "This is a chat web application where users from around the world can sign up and communicate with thier family and friends. It is currently in it's maintainance phase and was developed by Master Prince C. Onukwili, using React Js, Next Js and SCSS for the frontend. .NET, C# and MSSQL for it's backend, and Node Js for the web socket. ",
    },
    {
      id: 2,
      image: hopeAtLast,
      githubLink: "#",
      name: "Hope at last",
      demoLink: "https://hope-at-last.netlify.app/",
      desc: "This is a website that was and is currently being developed for charity, using HTML, CSS and Javascript",
    },
    {
      id: 3,
      image: momasPay,
      githubLink: "https://github.com/onukwilip/momas-pay-backup",
      name: "MomasPay",
      desc: "This is one of the versions of payment web application (UI only) that was and is currently being developed for an organization i worked for. It is an application where customers of the organization can pay for the organization's resources they consume, E.g Power/Energy",
      demoLink: "https://goit-momas-pay.netlify.app/",
    },
    {
      id: 4,
      image: expense,
      githubLink:
        "https://github.com/onukwilip/react-complete-guide-expenses-project",
      name: "Expenses App",
      desc: "This is a website/dummy project that was developed while i was learning React Js, it tracks a user's yearly expenses",
      demoLink: "https://goit-expenses.netlify.app/",
    },
    {
      id: 5,
      image: meetup,
      githubLink: "https://github.com/onukwilip/react-meetup",
      desc: "This is a website/dummy project that was developed while i was learning React Js, it keeps track of one's meetup",
      name: "Meetup App",
      demoLink: "https://goit-meetup.netlify.app/",
    },
    {
      id: 6,
      image: streamIt,
      desc: "This is a website/dummy project that was developed while i was learning React Js, it is a UI clone of Netflix",
      name: "StreamIt",
      githubLink: "https://github.com/onukwilip/movie-web-app",
      demoLink: "https://goit-streamit.netlify.app/",
    },
    {
      id: 7,
      image: goit,
      name: "GOIT",
      desc: "This is a website that was developed inorder to display my skills and services. (It was my previous portfolio)",
      githubLink: "https://github.com/onukwilip/GO-IT",
      demoLink: "https://onukwilip.github.io/GO-IT/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="p-contain" id="Portfolio">
      <section className="p-main">
        <div className="head">
          <h2>Recent Projects</h2>
          <h1 className="highlight">Portfolio</h1>
        </div>
        <br />
      </section>
      <div>
        <Slider {...settings} className="slider">
          {portfolioArray.map((eachProject) => {
            return <Project key={eachProject.id} eachProject={eachProject} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
