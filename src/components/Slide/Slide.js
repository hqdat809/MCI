import React from "react";
import "./Slide.scss";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
const Slide = () => {
  return (
    <div className="Slide">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators number-slide">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active button-slide"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            className="button-slide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className="button-slide"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            className="button-slide"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            className="button-slide"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            className="button-slide"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="HomePage__events-slide">
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
              <div className="HomePage__events-slide-item"></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev slide-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <ArrowBackIosNewRoundedIcon />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next slide-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <ArrowForwardIosRoundedIcon />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slide;
