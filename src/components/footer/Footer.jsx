import React from "react";
import "./footer.css";
import footer from "../../img/footer.png";
import github from "../../img/icons8-github-512.png";
import linkedin from "../../img/icons8-linkedin-512.png";
import instagram from "../../img/icons8-instagram-512.png";
import phone from "../../img/icons8-ringer-volume-96.png";

const Footer = () => {
  return (
    <section className="footer" id="Contact">
      <div>
        <img className="img" src={footer} alt="" />
      </div>
      <div className="content">
        <h2>Contact me at:</h2>
        <a href="mailto:onukwilip@gmail.com">
          <button>Hire me</button>
        </a>
        <div className="social">
          <a href="https://github.com/onukwilip" target="_blank">
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-onukwili-a82143233"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/onukwilip2006/" target="_blank">
            <img src={instagram} alt="" />
          </a>
          <a href="tel:09168572271" target="_blank">
            <img src={phone} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
