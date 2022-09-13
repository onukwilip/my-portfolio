import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import Slider from "react-slick";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import profile5 from "../../img/profile5.jpg";

const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      image: profile1,
      comment:
        "A robust congratulations to Prince for a job well done. \n We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired Prince and his team, and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!",
    },
    {
      id: 2,
      image: profile2,
      comment:
        "We thank Prince and his team for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    },
    {
      id: 3,
      image: profile3,
      comment:
        "We would like to express our satisfaction on the co-operation regarding the development of our web application. Prince and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project. We would like to recommend Prince and his development team. We look forward to working with them in future projects.",
    },
    {
      id: 4,
      image: profile4,
      comment:
        " I wanted to take a moment to thank you for the services your team has provided. Your team has been a pleasure to work with, professional and timely. The only delay in work that we have experienced has been due to our own lack of organization managing our projects, not yours. Job well done and I hope we can continue to grow together.",
    },
    {
      id: 5,
      image: profile5,
      comment:
        " I can't say enough about the excellent work that Prince and his team has done on our website. They took a below-average website and transformed it into an appealing and informative website. It was an absolute pleasure to work with them. The designer listened to my thoughts and suggestions and far surpassed my expectations. There were minor problems along the way; these were sorted out quickly and efficiently. We are looking forward to working with them on future projects. Anyone seeking a reference can call me anytime. You would be extremely unwise to overlook such a dedicated and professional team.",
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
          {testimonial.map((eachProject) => {
            return (
              <div className="testimonial" key={eachProject.id} align="center">
                <img src={eachProject.image} alt="" />
                <p>{eachProject.comment}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
