import React from "react";
import Branding from "../assets/Branding.png";
import Conversion from "../assets/Conversion.png";
import Reflection from "../assets/Reflection.png";
import Traffic from "../assets/traffic.png";

export default function Cardcontainer() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card border-0">
            <img src={Branding} className="card-img-top" alt="Branding" />
            <div className="card-body">
              <h5 className="card-text">
              attracting specific online visitors is vital.We optimize channels for the right audience
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src={Conversion} className="card-img-top" alt="Conversion" />
            <div className="card-body">
              <h5 className="card-text">
              create a unique identity without overspending.We design the best brand image for you
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card border-0">
            <img src={Reflection} className="card-img-top" alt="Reflection" />
            <div className="card-body">
              <h5 className="card-text">
              High visitor numbers need effective conversion.our strategies enhance conversions,saving resources

              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src={Traffic} className="card-img-top" alt="Traffic" />
            <div className="card-body">
              <h5 className="card-text">
              Gaining customers is crucial,retaining them is valuable.We build strong customer loyality.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
