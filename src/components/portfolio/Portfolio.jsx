import React from "react";
import "./portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import musicapp from "../../img/musicapp.png";
import hoc from "../../img/hoc.png";
import ecommerce from "../../img/ecommerce.png";
import sidebar from "../../img/sidebar.png";

const Portfolio = () => {
  const portfolioArray = [
    {
      id: 1,
      image: musicapp,
      githubLink: "",
      demoLink: "",
    },
    {
      id: 2,
      image: hoc,
      githubLink: "",
      demoLink: "",
    },
    {
      id: 3,
      image: ecommerce,
      githubLink: "",
      demoLink: "",
    },
    {
      id: 4,
      image: sidebar,
      githubLink: "",
      demoLink: "",
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
