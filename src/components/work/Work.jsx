import React, { useState } from "react";
import "./work.css";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

class PlaceWorkedClass {
  constructor(name, title, date, description, link) {
    this.name = name;
    this.title = title;
    this.date = date;
    this.desc = description;
    this.link = link;
  }
}

const placesWorked = [
  new PlaceWorkedClass(
    "GOPack",
    "Founder",
    ["2023/03/26", null],
    "I founded GOPack, an open-source javascript library which helps developers with little to no experience of Webpack build and bundle their projects into static files",
    "https://gopack.vercel.app"
  ),
  new PlaceWorkedClass(
    "Momas LTD Nigeria",
    "Software developer",
    ["2022/07/26", null],
    [
      "Developed software and web applications using the .NET framework, JavaScript framework and libraries, the likes of React Js, Next Js, etc...and MSSQL database.",
      "Developed a payment web application alongside fellow developers, in order for their customers to pay for the organisation's resources e.g Power/energy. The application was developed using React Js, SCSS, Java (JAX-RS) and MSSQL database.",
      "Developed a real-time tracking web application alongside fellow team members which will be deployed into the military where, registered users across the field will be tracked via the mobile application installed on their Walkie talkies. The application is in an early stage and is being developed using React Js, SCSS, Docker, Node Js Web Socket/MQTT, Google Maps API, MSSQL, Spring boot, etc",
    ],
    "https://www.memmcol.com"
  ),
  new PlaceWorkedClass(
    "Fiverr",
    "Freelancer",
    ["2022/10/01", null],
    [
      "Worked as a freelancer at Fiverr, developed web applications and software for potential clients",
      "Developed an auction application for a client on Fiverr. Users can signup, bid for products, post/update/delete products, etc. The application involves REST API integration, JWT authentication, email verification, microservices, Docker, etc.",
    ],
    "https://www.fiverr.com/go_industries"
  ),
  new PlaceWorkedClass(
    "Upwork",
    "Freelancer",
    ["2022/10/01", null],
    "Worked as a freelancer at Upwork, developed web applications and software for potential clients",
    "https://www.upwork.com/freelancers/~01e414823e14f1cdde"
  ),
];

const Work = () => {
  const [selectedPlace, setSelectedPlace] = useState(placesWorked[0]);
  const [ref, inView] = useInView();
  const control = useAnimation();
  const leftVariants = {
    far: {
      opacity: 0,
      x: -500,
    },
    current: {
      opacity: 1,
      x: 0,
    },
  };
  const rightVariants = {
    far: {
      opacity: 0,
      x: 500,
    },
    current: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("current");
    } else {
      control.start("far");
    }
  }, [control, inView]);

  return (
    <section>
      <div className="row w-main" id="Work" ref={ref}>
        <motion.div
          className="col-xl-6 w-l-side"
          variants={leftVariants}
          initial="far"
          animate={control}
        >
          <div>
            <h2>Works for all these</h2>
            <h1 className="highlight">Brands and Clients</h1>
            <p className="text">
              I am/was a software developer at various organizations, clients
              and platforms.
            </p>
            <br />
            <br />
            <a href="#Contact" className="action">
              <button>Hire me...</button>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="col-xl-6 w-r-side"
          variants={rightVariants}
          initial="far"
          animate={control}
        >
          <ul className="places-worked-list">
            {placesWorked?.map((eachPlace, i) => (
              <li
                key={i}
                className={
                  selectedPlace?.name === eachPlace?.name ? "active" : ""
                }
                onClick={() => setSelectedPlace(eachPlace)}
              >
                {eachPlace?.name?.split(" ")[0] || eachPlace?.name}
              </li>
            ))}
          </ul>
          <div className="content">
            <div className="header">
              <em>
                {selectedPlace?.title}{" "}
                <a
                  href={selectedPlace?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{selectedPlace?.name}
                </a>
              </em>
              <code>
                {selectedPlace?.date[0]} - {selectedPlace?.date[1] || "Present"}
              </code>
            </div>
            <div className="desctiption">
              {Array.isArray(selectedPlace?.desc) ? (
                <>
                  <ul>
                    {selectedPlace?.desc?.map((eachDesc, i) => (
                      <li>{eachDesc}</li>
                    ))}
                  </ul>
                </>
              ) : (
                selectedPlace?.desc
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
