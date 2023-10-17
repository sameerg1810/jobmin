import React from "react";
import GIF from "../assets/Main.gif";
import LOGOS from "../assets/Logoseries.png";

export default function Body() {
  return (
    <div className="container-fluid p-0">
      <h1 style={{ fontSize: "62px", marginBottom: "25px", textAlign: "center" }}>
        Welcome to Sanjo Infotech
      </h1>
      <div className="row">
        <div className="col-md-8 rounded-end">
          <img src={GIF} className="card-img-top" alt="..." style={{ borderRadius: '0 60px 60px 0' }} />
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h1 style={{ fontSize: "62px" }}>
            In today's competitive landscape Grow your business efficiently with ease
          </h1>
          <button className="btn btn-danger btn-lg mt-3">Reach out</button>
        </div>
      </div>
      <div className="card mt-4 border-0">
        <div className="card-body border-0">
          <p className="card-text">
            <img src={LOGOS} className="card-img-top" alt="logoseries" />
          </p>
        </div>
      </div>
    </div>
  );
}
