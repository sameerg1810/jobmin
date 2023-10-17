import React from "react";
import Cardcontainer from "./CardContainer";

export default function BodyMid() {
  return (
    <div className="container-fluid p-0 m-auto border-0 rounded-5">
      <div className="row">
        <div className="col-md-6 rounded-end">
        <h1 style={{ fontSize: "120px" }}>
        We optimize your business with our innovative digital strategies.
          </h1>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <Cardcontainer />
        </div>
      </div>
      <div className="card mt-4">
      </div>
    </div>
  );
}