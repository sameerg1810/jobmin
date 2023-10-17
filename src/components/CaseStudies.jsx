import React from "react";

const CaseStudies= () => {
  return (
    <div className="container-fluid">
     <h1 style={{ fontSize: "42px", marginBottom: "25px", textAlign: "center" }}>_______________________Case Studies_____________________________</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
              <h5 className="card-title">Card 1 Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
              <h5 className="card-title">Card 2 Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card m-3 bg-primary-subtle">
            <div className="card-body m-5 p-5">
              <h5 className="card-title">Card 3 Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;