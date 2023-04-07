import React from "react";
import "./testimonial.css";
import mrTunde from "../../img/mr-tunde.png";
import mrSegun from "../../img/mr-segun.png";
import sodiq from "../../img/sodiq.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  const testimonial = [
    // {
    //   id: 1,
    //   image: mrSegun,
    //   name: "Olusegun Adebumiti",
    //   twitterLink: "",
    //   linkedinLink: "",
    //   comment:
    //     "A robust congratulations to Prince for a job well done. \n We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired Prince and his team, and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!",
    // },
    {
      id: 2,
      image: mrTunde,
      twitterLink: "",
      name: "Tunde Tiamiyu",
      linkedinLink: "https://www.linkedin.com/in/tunde-tiamiyu-953089184/",
      comment:
        "I wanted to take a moment to express my admiration for your progress as a full stack developer. Your technical skills aside, I also want to commend you on your professionalism and work ethic. You consistently meet deadlines, communicate effectively with your colleagues, and always strive to improve upon your work. These qualities are rare and highly valued in the industry.",
    },
    {
      id: 3,
      image: sodiq,
      twitterLink: "",
      name: "Badmus Sodiq",
      linkedinLink: "https://www.linkedin.com/in/badmus-sodiq-b75441185/",
      comment:
        "Prince is a smart and dedicated worker whose work ethic is top-notch. He has a vast knowledge of technology and he is good at what he does. His learning ability is on another level. He makes sure he gets the job done roll and working no what what it takes.",
    },
  ];

  return (
    <section className="contain" align="center" id="Testimonial">
      <section className="row t-main" align="center">
        <div className="col-xl-12">
          <h1>
            Clients always get <span>Exceptional Work</span> from me...
          </h1>
        </div>
      </section>
      <div>
        <Swiper
          className="slider"
          effect={"flip"}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          loop
          modules={[EffectFlip, Pagination, Navigation]}
        >
          {testimonial.map((eachTestimonial) => {
            return (
              <SwiperSlide className="each-slide">
                <div className="testimonial" key={eachTestimonial.id}>
                  <div className="img-container">
                    <img src={eachTestimonial?.image} alt="" />
                    <em>{eachTestimonial?.name}</em>
                    <div className="actions">
                      {/* <a href={eachTestimonial?.twitterLink} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a> */}
                      <a href={eachTestimonial?.linkedinLink} target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <p>{eachTestimonial.comment}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
