import React from "react";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="container-fluid px-lg-5">
          <nav className="navbar navbar-dark navbar-expand-sm  fixed-top">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#Navbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">
              {" "}
              <img
                src="img/bg.webp"
                className="img-fluid"
                height={30}
                width={40}
              />
            </a>
            <div className="collapse navbar-collapse" id="Navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active" id="invalidbtn">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item" id="criticalbtn">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item" id="criticalbtn2">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item" id="criticalbtn3">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item" id="criticalbtn4">
                  <a className="nav-link" href="#register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="training.html">
                    Train With Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
