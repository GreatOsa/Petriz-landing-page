import React from "react";
import "./hamburger.css";

export default function Hamburger() {
  return (
    <div className="hamburger">
      {" "}
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
}
