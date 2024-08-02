import React from 'react';
import './TopNav.css';

export default function TopNav() {
  return (
    <div className="dark-bg">
      <div className="navbar-width mobile-nav">
        <nav className="navbar navbar-expand-lg navbar-dark top-navbar px-2">
          <div className="container-fluid flex-md-row flex-column">
            <ul className="navbar-nav flex-md-row gap-3">
              <li className="nav-item">
                <div className="d-flex align-items-center gap-1">
                  <i className="fa-regular fa-envelope fa-lg" style={{ color: "#27975F" }}></i>
                  <span className="text-white">hello@gmail.com</span>
                </div>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center gap-1">
                  <i className="fa-solid fa-phone fa-lg" style={{ color: "#27975F" }}></i>
                  <span className="text-white"> 0307-9707175</span>
                </div>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center gap-1">
                  <i className="fa-regular fa-clock fa-lg" style={{ color: "#27975F" }}></i>
                  <span className="text-white">Mon - Fri 10:00 - 06:00</span>
                </div>
              </li>
            </ul>
            <div className="d-flex gap-4 mt-md-0 mt-4 mb-3">
              <i className="fa-brands fa-facebook fa-lg text-white"></i>
              <i className="fa-brands fa-twitter fa-lg text-white"></i>
              <i className="fa-brands fa-youtube fa-lg text-white"></i>
            </div>
          </div>
        </nav>
      </div>

      <hr style={{ margin: "0px", backgroundColor: "gray" }} />
      <div className="navbar-width">
        <nav className="navbar navbar-expand-lg navbar-dark top-navbar">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Industries
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <button className="request-quote-btn text-white border-0 py-1">
                    Request A Quote
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
