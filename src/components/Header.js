import React from "react";

import pic from "../assets/Graviti Logo 1.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={pic} alt="graviti-logo" className="header-img" />
    </div>
  );
};

export default Header;
