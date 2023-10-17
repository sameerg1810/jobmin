import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarOne from "../assets/CarOne.png";
import CarTwo from "../assets/CarTwo.png";
import CarThree from "../assets/CarThree.png";
import CarFour from "../assets/CarFour.png";

const MyCarousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <h1 style={{ fontSize: "42px", marginBottom: "25px", textAlign: "center" }}>_______________________Testimonials_____________________________</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={CarOne} className="d-block w-100" alt="CarOne" />
        </div>
        <div className="carousel-item">
          <img src={CarTwo} className="d-block w-100" alt="CarTwo" />
        </div>
        <div className="carousel-item">
          <img src={CarThree} className="d-block w-100" alt="CarThree" />
        </div>
        <div className="carousel-item">
          <img src={CarFour} className="d-block w-100" alt="CarFour" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
