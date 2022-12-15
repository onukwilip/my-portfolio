import React, { useEffect } from "react";
import "./services.css";
import humble from "../../img/humble.png";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import figma from "../../img/figma.png";
import dotNet from "../../img/DotNET.png";
import _react from "../../img/react.png";

import TCard from "../tCards/TCard";
import CV from "./Minimal Professional Resume.pdf";

const Services = () => {
  return (
    <>
      <section className="services" id="Services">
        <div className="row s-main">
          <div className="col-xl-6 s-l-side">
            <div className="s-intro">
              <h2>My Awesome</h2>
              <h1 className="intro-services">Services</h1>
            </div>
            <div className="desc">
              <span>
                <b>My services include:</b>
                <ul>
                  <li>
                    Designing and developing of website and web apps using only
                    the best and latest technologies
                  </li>
                  <li>
                    Developing of server side alogrithms for ready made client
                    side using the .NET framework
                  </li>
                  <li>
                    Development of web API's to be consumed by front end web app
                  </li>
                  <li>
                    Development of softwares and desktop applications to carry
                    out tasks using the .NET framework
                  </li>
                </ul>
              </span>
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
                text="Develops software, andweb application using the .NET framework and C# programming language"
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
                image={_react}
                title="UI/UX Designer"
                text="Designs and develop beautiful web user interface using various javascript framework like React.Js, Next.Js, Redux, Solidity...etc"
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
                image={figma}
                title="Graphics Designer"
                text="Designs and edits wonderful images, logos, flyers using Figma, Corel Draw, Adobe Photoshop...etc"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
