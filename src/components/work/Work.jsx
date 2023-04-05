import React from "react";
import "./work.css";
import upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import kwork from "../../img/kwork.png";
import truelancer from "../../img/truelancer2.png";
import freelancer from "../../img/freelancer.png";

const Work = () => {
  return (
    <section>
      <div className="row w-main" id="Work">
        <div className="col-xl-6 w-l-side">
          <div>
            <h2>Works for all these</h2>
            <h1 className="highlight">Brands and Clients</h1>
            <p className="text">
              I am a freelancer and at top freelancing companies in the world!
              E.g Fiverr, Upwork, Kwork, Freelancer, Truelancer and so on...
            </p>
            <br />
            <br />
            <a href="#Contact">
              <button>Hire me...</button>
            </a>
          </div>
        </div>
        <div className="col-xl-6 w-r-side">
          <div className="bg">
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-circle bg-circle-1"></div>
            <div className="circle">
              <a
                href="https://www.truelancer.com/freelancer/princeonukwili"
                target="_blank"
              >
                <div
                  className="img-circle"
                  style={{
                    top: "-3rem",
                    left: "7rem",
                  }}
                >
                  <img src={freelancer} alt="" />
                </div>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01e414823e14f1cdde"
                target="_blank"
              >
                <div
                  className="img-circle"
                  style={{
                    top: "7rem",
                    left: "-3rem",
                  }}
                >
                  <img src={upwork} alt="" />
                </div>
              </a>
              <a
                href="https://www.freelancer.com/u/PrinceAgozie"
                target="_blank"
              >
                <div
                  className="img-circle"
                  style={{
                    bottom: "-3rem",
                    left: "7rem",
                  }}
                >
                  <img src={truelancer} alt="" />
                </div>
              </a>
              <a href="https://kwork.com/user/onukwilip" target="_blank">
                <div
                  className="img-circle"
                  style={{
                    top: "7rem",
                    right: "-3rem",
                  }}
                >
                  <img src={kwork} alt="" />
                </div>
              </a>
              <a href=" https://www.fiverr.com/go_industries" target="_blank">
                <div className="img-center">
                  <img src={fiverr} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
