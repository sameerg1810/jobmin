import React from "react";
import Header from "./components/Header";
import BodyMid from "./components/BodyMid";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Carousal from "./components/Carousal";
import CaseStudies from "./components/CaseStudies";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <Body />
 <BodyMid/>
 <Services/>
 <CaseStudies/>
 <Blogs/>
 <Carousal/>
 <Footer/>
    </div>
  );
}
