import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import me from "../../img/me.png";
import github from "../../img/icons8-github-512.png";
import insta from "../../img/icons8-instagram-512.png";
import linkedin from "../../img/icons8-linkedin-512.png";
import "./header.css";

const Header = () => {
  const [miniNav, setMiniNav] = useState(false);

  const onLinkClick = () => {
    setMiniNav(false);
  };

  return (
    <header>
      <div className="h-row">
        <div className="h-flex h-l-side ">
          <h2>Prince</h2>
        </div>
        <div className="">
          <ul className={!miniNav ? "menu h-r-side" : "show"}>
            <div className="profile">
              <div className="img-container">
                <img src={me} alt="" />
              </div>
              <a
                href="https://github.com/onukwilip"
                target="_blank"
                className="social"
              >
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.instagram.com/onukwilip2006/"
                target="_blank"
                className="social"
              >
                <img src={insta} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-onukwili-a82143233"
                target="_blank"
                className="social"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
            <hr style={{ width: "100%" }} />
            <li onClick={onLinkClick}>
              <a href="#Home">Home</a>
            </li>
            <li onClick={onLinkClick}>
              <a href="#About">About</a>
            </li>{" "}
            <li onClick={onLinkClick}>
              <a href="#Skills">Skills</a>
            </li>
            <li onClick={onLinkClick}>
              <a href="#Work">Experience</a>
            </li>
            <li onClick={onLinkClick}>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li onClick={onLinkClick}>
              <a href="#Testimonial">Testimonial</a>
            </li>
            <a href="tel:+2349071589571">
              <button onClick={onLinkClick}>Contact</button>
            </a>
          </ul>
        </div>
        {miniNav ? (
          <span
            className="fas fa-times icon"
            onClick={() => {
              setMiniNav(false);
            }}
          ></span>
        ) : (
          <span
            className="fas fa-bars icon"
            onClick={() => {
              setMiniNav(true);
            }}
          ></span>
        )}
      </div>
    </header>
  );
};

export default Header;
