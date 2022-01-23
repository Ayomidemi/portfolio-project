import React from "react";
import "./footer.css"
import footerImg from "./img/logo.ico";
function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="" className="log"/>
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
     Copyright © 2022  | Created by <a href="/#"><b>Peace Adeniji</b></a>
      </span>
    </div>
  );
}

export default Footer;