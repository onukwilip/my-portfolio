import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import Slider from "react-slick";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";

const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      image: profile1,
      name: "Olusegun Adebumiti",
      twitterLink: "",
      linkedinLink: "",
      comment:
        "A robust congratulations to Prince for a job well done. \n We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired Prince and his team, and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!",
    },
    {
      id: 2,
      image: profile2,
      twitterLink: "",
      name: "Tunde Tiamiyu",
      linkedinLink: "",
      comment:
        "We thank Prince and his team for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    },
    {
      id: 3,
      image: profile3,
      twitterLink: "",
      name: "Badmus Sodiq",
      linkedinLink: "",
      comment:
        "We would like to express our satisfaction on the co-operation regarding the development of our web application. Prince and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Prince and his development team. We look forward to working with them in future projects.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <Slider {...settings} className="slider">
          {testimonial.map((eachTestimonial) => {
            return (
              <div className="testimonial" key={eachTestimonial.id}>
                <div className="img-container">
                  <img src={eachTestimonial?.image} alt="" />
                  <em>{eachTestimonial?.name}</em>
                  <div className="actions">
                    <a href={eachTestimonial?.twitterLink} target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href={eachTestimonial?.linkedinLink} target="_blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <p>{eachTestimonial.comment}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
