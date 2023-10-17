import React from "react";
import Cardcontainer from "./CardContainer";

export default function Services() {
  return (
    <div className="container-fluid p-0 m-auto bg-danger-subtle border-0 rounded-5">
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>
        Services
      </h1>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <ul style={{ fontSize: "18px" }}>
            <li style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}>
              
                Digital Marketing
              
            </li>
            <li>Web Development</li>
            <li>Static Websites</li>
            <li>Dynamic Websites</li>
            <li>Mobile Application</li>
            <li>Tailor Customized Business Solutions</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <ul style={{ fontSize: "18px" }}>
            <li style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}>
             
                IT Solutions
         
            </li>
            <li>Blockchain System</li>
            <li>AI and ML Tools</li>
            <li>Learning Management Systems</li>
            <li>Hospital Management Systems</li>
            <li>Employee Productivity Applications</li>
          </ul>
        </div>
      </div>
      <div className="card mt-4 p-5 border-0 bg-danger-subtle border-0 rounded-5">
        <button className="btn btn-danger btn-lg mt-3">Know more</button>
      </div>
    </div>
  );
}
