import React from "react";
import "./home.css";
import github from "../../img/icons8-github-512.png";
import linkedin from "../../img/icons8-linkedin-512.png";
import instagram from "../../img/icons8-instagram-512.png";
import boy from "../../img/me.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import crown from "../../img/crown.png";
import thumb from "../../img/thumbup.png";
import Card from "../card/Card";
import glassesemoji from "../../img/glassesimoji.png";
import { useState, useEffect } from "react";

const Home = () => {
  //TEXT ANIMATION
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Developer", "Designer", "Freelancer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

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
    <>
      <section className="row home-main" id="Home">
        <div className="col-xl-6 l-side">
          {/* <div className="background"></div> */}
          <div className="flex intro">
            <h1>Hy! I'm</h1>
            <h1 className="name">Prince</h1>
          </div>
          <div className="flex animate-text">
            <h1 className="static">I am a</h1>
            <div
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            >
              <h1 className="dynamic">{text}</h1>
            </div>
          </div>
          <br />
          <div className="desc">
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
            <br />
            <br />
            <a href="#Contact">
              <button>Hire me!</button>
            </a>
          </div>
          <div className="media flex">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="col-xl-6 r-side home-r-side">
          <div className="emoji" style={{}}>
            <img
              src={glassesemoji}
              style={{
                width: 150,
                height: "auto",
              }}
              alt=""
            />
          </div>
          <div className="card-container card-1" style={{}}>
            <Card image={crown} desc="Web Developer" />
          </div>
          <div className="card-container card-2" style={{}}>
            <Card image={thumb} desc="Best design award" />
          </div>
          <div className="card-container card-3" style={{}}>
            <Card image={thumb} desc="Software developer" />
          </div>
          <img src={boy} alt="" className="boy" />
          <img src={vector1} alt="" className="v1" />
          <img src={vector2} alt="" className="v2" />
        </div>
      </section>
    </>
  );
};

export default Home;
