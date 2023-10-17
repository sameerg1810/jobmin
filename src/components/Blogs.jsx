import React from "react";
import DigiMark from "../assets/DigiMark.png"
import Channels from "../assets/Channels.png"
import MobileApp from "../assets/MobileApp.png"

const Blogs= () => {
  return (
    <div className="container-fluid">
     <h1 style={{ fontSize: "42px", marginBottom: "25px", textAlign: "center" }}>_______________________Blogs_____________________________</h1>
     <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
               <img src={DigiMark} className="card-img-top" alt="Conversion" />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
               <img src={Channels} className="card-img-top" alt="Conversion" />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
               <img src={MobileApp} className="card-img-top" alt="Conversion" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
