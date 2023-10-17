import LOGO from "../assets/LOGO.png";
import React from "react";
import '../App.css';

export default function Footer() {
    return (
        <div className="card border-0" style={{ backgroundColor: "#8B8680" }}>
            <div className="card-header d-flex justify-content-start border-0">
                <img src={LOGO} className="card-img-top logo-img" alt="logo" />
            </div>
            <div className="card-body mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card m-3 border-0" id="footerCard">
                            <div className="card-body m-5 p-5">
                                <h5 className="card-title">Information</h5>
                                <p className="card-text">
                                    Sanjo Infotech Services excels in optimizing business through innovative Strategies. We help businesses innovate and grow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card m-3 border-0" id="footerCard">
                            <div className="card-body m-5 p-5">
                                <h5 className="card-title">Contact</h5>
                                <p className="card-text">
                                    Address: 1/1, Yella Reddy Guda Rd, Ameerpet, Sanjay Gandhi Nagar, Yella Reddy Guda, Hyderabad, Telangana 500073
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card m-3 border-0" id="footerCard">
                            <div className="card-body m-5 p-5">
                                <h5 className="card-title">Reach Us</h5>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nameInput">Name</label>
                                        <input type="name" className="form-control" id="nameInput" placeholder="Enter Name" />
                                        <label htmlFor="companyInput">Company</label>
                                        <input type="company" className="form-control" id="companyInput" placeholder="Enter Company" />
                                        <label htmlFor="contactInput">Contact</label>
                                        <input type="contact" className="form-control" id="contactInput" placeholder="Enter Contact" />
                                        <label htmlFor="emailInput">Email address</label>
                                        <input type="email" className="form-control" id="emailInput" placeholder="Enter email" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
