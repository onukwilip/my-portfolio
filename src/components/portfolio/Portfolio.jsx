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

const Portfolio = () => {
  const portfolioArray = [
    {
      id: 1,
      image: gochat,
      githubLink: "https://github.com/onukwilip/GOChat-2.0",
      demoLink: "https://gochat-tau.vercel.app",
    },
    {
      id: 2,
      image: hopeAtLast,
      githubLink: "#",
      demoLink: "https://hope-at-last.netlify.app/",
    },
    {
      id: 3,
      image: momasPay,
      githubLink: "https://github.com/onukwilip/momas-pay-backup",
      demoLink: "https://goit-momas-pay.netlify.app/",
    },
    {
      id: 4,
      image: expense,
      githubLink:
        "https://github.com/onukwilip/react-complete-guide-expenses-project",
      demoLink: "https://goit-expenses.netlify.app/",
    },
    {
      id: 5,
      image: meetup,
      githubLink: "https://github.com/onukwilip/react-meetup",
      demoLink: "https://goit-meetup.netlify.app/",
    },
    {
      id: 6,
      image: streamIt,
      githubLink: "https://github.com/onukwilip/movie-web-app",
      demoLink: "https://goit-streamit.netlify.app/",
    },
    {
      id: 7,
      image: goit,
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
            return (
              <div className="projects" key={eachProject.id} align="center">
                <img src={eachProject.image} alt="" />
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
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
