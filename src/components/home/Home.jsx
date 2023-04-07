import React, { useRef } from "react";
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
import { useInView } from "react-intersection-observer";

const Home = () => {
  //TEXT ANIMATION
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const emojiRef = useRef();
  const [ref, inView] = useInView();

  const toRotate = ["Developer", "Designer", "Freelancer"];
  const period = 2000;

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

  const addAnimation = () => {
    card1Ref?.current?.classList?.add("card-1-animate");
    card2Ref?.current?.classList?.add("card-2-animate");
    card3Ref?.current?.classList?.add("card-3-animate");
    emojiRef?.current?.classList?.add("emoji-animate");
  };

  const removeAnimation = () => {
    card1Ref?.current?.classList?.remove("card-1-animate");
    card2Ref?.current?.classList?.remove("card-2-animate");
    card3Ref?.current?.classList?.remove("card-3-animate");
    emojiRef?.current?.classList?.remove("emoji-animate");
  };

  useEffect(() => {
    if (inView) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }, [inView]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <>
      <section className="row home-main" id="Home" ref={ref}>
        <div className="col-xl-6 l-side">
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
              Hello 🖐🏾 I'm Prince! I'm a software developer with over a year of
              experience using both the .NET and JavaScript frameworks
            </span>
            <br />
            <br />
            <a href="#Contact">
              <button>Hire me!</button>
            </a>
          </div>
          <div className="media flex">
            <a
              href="https://github.com/onukwilip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="http://www.linkedin.com/in/prince-onukwili-a82143233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href="http://www.instagram.com/onukwilip2006/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>

        <div className="col-xl-6 r-side home-r-side">
          <div className="emoji" ref={emojiRef}>
            <img
              src={glassesemoji}
              style={{
                width: 150,
                height: "auto",
              }}
              alt=""
            />
          </div>
          <div className="card-container card-1" ref={card1Ref}>
            <Card image={crown} desc="Web Developer" />
          </div>
          <div className="card-container card-2" ref={card2Ref}>
            <Card image={thumb} desc="Best design award" />
          </div>
          <div className="card-container card-3" ref={card3Ref}>
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
