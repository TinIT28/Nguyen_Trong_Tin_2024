import React from "react";
import "./Header.scss";
import AvatarComponent from "./Avatar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="./logo.png" className="image-logo" />
      </div>
      <div className="avatar">
        <AvatarComponent />
      </div>
    </div>
  );
};

export default Header;
