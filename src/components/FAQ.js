import React from "react";
import Google from "../images/google.png";
import Meta from "../images/meta.png";
import Macdonald from "../images/macdonald.png";
import Ross from "../images/ross.png";
import Cocacola from "../images/cocacola.png";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="partnership-section">
      <div className="partnership-companies">
        <h1 className="partnership-title">
          More Than 200 <br />
          Companies Trust Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,

        </p>

        <div className="offering-cards">
          {[Google, Meta, Cocacola, Ross, Macdonald].map((logo, index) => (
            <div className="card" key={index}>
              <img src={logo} className="card-img" alt="Company Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
