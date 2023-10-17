import React from "react";
import Logo from "../assets/LOGO.png";

const Header = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Blogs",
    "CaseStudies",
    "Contact",
  ];

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "10px",
  };

  const buttonStyle = {
    background: "white",
    border: "none",
    padding: "20px 20px",
    margin: "0 12px",
    borderRadius: "5px",
    color: "blue",
    fontSize: "28px",
    fontWeight: "bold",
    transition: "background 0.3s",
  };
  
 
  buttonStyle["&:hover"] = {
    background: "linear-gradient(45deg, red, white)",
  };
  
  const titleStyle = {
    marginLeft: "20px",
  };

  const renderNavItems = navItems.map((item, index) => (
    <button key={index} style={buttonStyle}>
      {item}
    </button>
  ));

  return (
    <div style={navStyle}>
      <div style={titleStyle}>
        <img src={Logo} alt="Sanja Infotech" />
      </div>
      <div>{renderNavItems}</div>
    </div>
  );
};

export default Header;
