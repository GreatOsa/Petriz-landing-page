import React from "react";

export function SigninWith({ icon, description }) {
  return (
    <button className="oauthButton">
      <img className="icon" src={icon} alt="" />
      {description}
    </button>
  );
}
