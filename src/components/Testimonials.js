import React, { useState } from "react";
import Sun from "../images/sun.png";
import Slider from "react-slick";
import TestimonialImg from "../images/men.jpg";
import Faq from "../images/faq.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const accordian = [
    {
      question: "Where Can I Get Software Help?",
      answer:
        "You can find software help through various channels. Online forums, tech support services, and dedicated software assistance providers like Tfortech are great sources for resolving software-related issues and getting the guidance you need",
    },
    {
      question: "How much does data software cost?",
      answer:
        "The cost of data software varies widely based on factors such as type, features, and licensing. It can range from free open-source options to high-end enterprise solutions that can cost thousands of dollars. The price is influenced by your specific needs, the scale of data, and any additional services like support or customization. To determine the exact cost, research and compare software options that align with your requirements.",
    },
    {
      question: "What kind of data is needed for software?",
      answer:
        "The data needed for software varies depending on the specific application. In general, software may require input data, such as user information, text, numbers, or files, to perform tasks or functions. This can include user preferences, databases, sensor data, or any information relevant to the software's purpose. The type and format of data depend on the software's functionality, and it's essential to provide the right data for accurate and effective performance.",
    },
    {
      question: "What you want?",
      answer:
        "The data needed for software varies depending on the specific application. In general, software may require input data, such as user information, text, numbers, or files, to perform tasks or functions. This can include user preferences, databases, sensor data, or any information relevant to the software's purpose. The type and format of data depend on the software's functionality, and it's essential to provide the right data for accurate and effective performance.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section pt-5">
      <div className="container">
        <div className="testimonials-head">
          <div className="heading-container">
            <h1 className="header-title">
              Let's hear what our <br />
              customers say
            </h1>
          </div>
          <div className="image-container">
            <img src={Sun} alt="Sun" className="header-image" />
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {[...Array(4)].map((_, index) => (
              <div className="testimonial-card" key={index}>
                <div className="card-content">
                  <div className="card-header">
                    <div className="header-left">
                      <img
                        src={TestimonialImg}
                        alt="Testimonial"
                        className="testimonial-img"
                      />
                      <div className="header-info">
                        <h5 className="testimonial-name">Poli Monaco</h5>
                        <span className="testimonial-handle">@polimonaco</span>
                      </div>
                    </div>
                    <div className="header-right">
                      <i className="fa-solid fa-star star-icon"></i>
                      <span className="rating">4.9</span>
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis modi, ratione doloremque dolores asperiores
                    molestias expedita ad enim, sit repudiandae quaerat pariatur
                    itaque dignissimos animi repellendus odio explicabo nemo
                    consequatur! Praesentium vitae eaque, culpa quas laboriosam.
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="faq-section">
          <div className="faq-container">
            <div className="faq-image">
              <img src={Faq} alt="FAQ" className="faq-img" />
            </div>
            <div className="faq-content">
              <h2 className="faq-title">Here you can clear all doubts</h2>
              <div className="accordion">
                {accordian.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div className="accordion-title" onClick={() => toggle(index)}>
                      <h2>{item.question}</h2>
                      <span className="accordion-icon">
                        {selected === index ? "-" : "+"}
                      </span>
                    </div>
                    {selected === index && (
                      <div className="accordion-content">
                        <p>{item.answer}</p>
                      </div>
                    )}
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
