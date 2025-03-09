import React from "react";
import "./Login.css";
import googleSvg from "./assets/google.svg";
import appleSvg from "./assets/apple.svg";
import { SigninWith } from "./OauthButton";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="Login">
      <div className="login-container">
        <h2 className="">Welcome Back!</h2>
        <form className="small-container">
          <input
            type="email"
            placeholder="Enter Email"
            className=""
            name="email"
            //   onChange={handleChanges}
          />
          <input
            type="email"
            placeholder="Password"
            className=""
            name="email"
            //   onChange={handleChanges}
          />

          <button className="">Continue</button>
        </form>
        <div className="text-center">
          <span>Already have an account? </span>
          {/* <Link to="/register */}
          <Link to="/signup" className="link">
            SignUP
          </Link>
        </div>
        <div className="divider-container">
          <div className="divider"></div>
          <span>Or</span>
          <div className="divider"></div>
        </div>
        <div className="small-container">
          <SigninWith icon={googleSvg} description={"Continue with Google"} />
          <SigninWith icon={appleSvg} description={"Continue with Apple"} />
        </div>
      </div>
    </div>
  );
}
