import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import me from "../../img/me.png";
import github from "../../img/icons8-github-512.png";
import insta from "../../img/icons8-instagram-512.png";
import linkedin from "../../img/icons8-linkedin-512.png";
import "./header.css";

const Header = () => {
  const [miniNav, setMiniNav] = useState(false);
  const cardScrollAnimate = () => {
    let card1 = document.querySelectorAll(".s-card-1");
    let card2 = document.querySelectorAll(".s-card-2");
    let card3 = document.querySelectorAll(".s-card-3");
    let section = document.querySelectorAll(".s-r-side");

    //SECTION
    for (let i = 0; i < section.length; i++) {
      let windowHeight2 = window.innerHeight;
      let elementTop2 = section[i].getBoundingClientRect().top;
      let elementVisible2 = 150;
      if (elementTop2 < windowHeight2 - elementVisible2) {
        for (let j = 0; j < card1.length; j++) {
          card1[j].classList.add("s-card-1-animate");
        }
        for (let j = 0; j < card2.length; j++) {
          card2[j].classList.add("s-card-2-animate");
        }
        for (let j = 0; j < card3.length; j++) {
          card3[j].classList.add("s-card-3-animate");
        }
      } else {
        for (let j = 0; j < card1.length; j++) {
          card1[j].classList.remove("s-card-1-animate");
        }
        for (let j = 0; j < card2.length; j++) {
          card2[j].classList.remove("s-card-2-animate");
        }
        for (let j = 0; j < card3.length; j++) {
          card3[j].classList.remove("s-card-3-animate");
        }
      }
    }
    //CARD 1
    for (let j = 0; j < card1.length; j++) {
      let windowHeight = window.innerHeight;
      let elementTop = card1[j].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card1[j].classList.add("s-card-1-animate");
      } else {
        card1[j].classList.remove("s-card-1-animate");
      }
    }

    //CARD 2
    for (let j = 0; j < card2.length; j++) {
      let windowHeight = window.innerHeight;
      let elementTop = card2[j].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card2[j].classList.add("s-card-2-animate");
      } else {
        card2[j].classList.remove("s-card-2-animate");
      }
    }

    //CARD 3
    for (let j = 0; j < card3.length; j++) {
      let windowHeight = window.innerHeight;
      let elementTop = card3[j].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card3[j].classList.add("s-card-3-animate");
      } else {
        card3[j].classList.remove("s-card-3-animate");
      }
    }
  };

  const headerScrollAnimate = () => {
    const emoji = document.querySelectorAll(".emoji");
    let card1 = document.querySelectorAll(".card-1");
    let card2 = document.querySelectorAll(".card-2");
    let card3 = document.querySelectorAll(".card-3");

    //EMOJI
    for (let i = 0; i < emoji.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = emoji[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        emoji[i].classList.add("emoji-animate");
      } else {
        emoji[i].classList.remove("emoji-animate");
      }
    }

    //CARD 1
    for (let j = 0; j < card1.length; j++) {
      let windowHeight = window.innerHeight;
      let elementTop = card1[j].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card1[j].classList.add("card-1-animate");
      } else {
        card1[j].classList.remove("card-1-animate");
      }
    }

    //CARD 2
    for (let k = 0; k < card2.length; k++) {
      let windowHeight = window.innerHeight;
      let elementTop = card2[k].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card2[k].classList.add("card-2-animate");
      } else {
        card2[k].classList.remove("card-2-animate");
      }
    }

    //CARD 3
    for (let l = 0; l < card3.length; l++) {
      let windowHeight = window.innerHeight;
      let elementTop = card3[l].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        card3[l].classList.add("card-3-animate");
      } else {
        card3[l].classList.remove("card-3-animate");
      }
    }
  };

  const circleZoom = () => {
    const section = document.querySelectorAll(".c-main");
    //EMOJI
    for (let i = 0; i < section.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = section[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        section[i].classList.add("c-animate");
      } else {
        section[i].classList.remove("c-animate");
      }
    }
  };

  const circleRotate = () => {
    const section = document.querySelectorAll(".bg");
    let circle = document.querySelectorAll(".circle");
    //CIRCLE
    for (let i = 0; i < section.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = section[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        for (let j = 0; j < circle.length; j++) {
          circle[j].classList.add("circle-animate");
        }
      } else {
        for (let j = 0; j < circle.length; j++) {
          circle[j].classList.remove("circle-animate");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerScrollAnimate);
    headerScrollAnimate();
    window.addEventListener("scroll", cardScrollAnimate);
    cardScrollAnimate();
    window.addEventListener("scroll", circleZoom);
    circleZoom();
    window.addEventListener("scroll", circleRotate);
    circleRotate();
  });
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
            <li
              onClick={() => {
                setMiniNav(false);
              }}
            >
              <a href="/#Home">Home</a>
            </li>

            <li
              onClick={() => {
                setMiniNav(false);
              }}
            >
              <a href="#Services">Services</a>
            </li>

            <li
              onClick={() => {
                setMiniNav(false);
              }}
            >
              <a href="#Work">Experience</a>
            </li>
            <li
              onClick={() => {
                setMiniNav(false);
              }}
            >
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li
              onClick={() => {
                setMiniNav(false);
              }}
            >
              <a href="#Testimonial">Testimonial</a>
            </li>
            <a href="tel:+2349071589571">
              <button
                onClick={() => {
                  setMiniNav(false);
                }}
              >
                Contact
              </button>
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
