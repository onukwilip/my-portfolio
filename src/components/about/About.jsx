import React, { useEffect } from "react";
import "./about.css";
import humble from "../../img/humble.png";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import canva from "../../img/canva.png";
import dotNet from "../../img/DotNET.png";
import nextjs from "../../img/nextjs.png";

import TCard from "../tCards/TCard";
import CV from "./PrinceOnukwiliResume.pdf";

const About = () => {
  return (
    <>
      <section className="services" id="About">
        <div className="row s-main">
          <div className="col-xl-6 s-l-side">
            <div className="s-intro">
              <h2>About</h2>
              <h1 className="intro-services">me 😁</h1>
            </div>
            <div className="desc">
              <span>
                I'm a seasoned software engineer with over a year of experience
                building and shipping high-quality software products. I have a
                passion for solving complex problems and delivering elegant
                solutions that empower users and drive business results. My
                expertise spans the full software development lifecycle, from
                designing and architecting scalable systems to writing clean,
                maintainable code and deploying it to production. I'm
                well-versed in a variety of programming languages and
                frameworks, including React Js, Next Js, Node Js, SASS, C#,
                .NET, MSSQL, MongoDB, Docker, and Azure, and I'm constantly
                learning and staying up-to-date with the latest industry trends
                and best practices
              </span>
              <br />
              <br />
              <a href={CV} target="_blank" download>
                <button>Download CV!</button>
              </a>
            </div>
          </div>
          <div className="col-xl-6 s-r-side">
            <div
              className="s-card-1"
              style={
                {
                  // position: "absolute",
                  // top: -20,
                  // right: 0,
                }
              }
            >
              <TCard
                image={dotNet}
                title="Software Developer"
                text="Develops server side and Desktop applications using technologies like the .NET framewor, C#, MSSQL, etc"
              />
            </div>
            <div
              className="s-card-2"
              style={
                {
                  // position: "absolute",
                  // bottom: 0,
                  // left: 0,
                }
              }
            >
              <TCard
                image={nextjs}
                title="Frontend Developer"
                text="Designs and develop beautiful web user interface with wonderful user experience using various javascript framework like React.Js, Next.Js, Redux, Typescript...etc"
              />
            </div>
            <div
              className="s-card-3"
              style={
                {
                  // position: "absolute",
                  // top: "20rem",
                  // right: "3rem",
                }
              }
            >
              <TCard
                image={canva}
                title="Product Designer"
                text="Creates beautiful designs for clients and organizations using tools like Canva, Corel draw etc"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
