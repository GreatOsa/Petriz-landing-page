import React from "react";

import Button from "../components/Button/Button";

import Textarea from "../components/textarea/Textarea";
import { Link } from "react-router-dom";

export default function LandingPage({ isSearch, handleSearch }) {
  return (
    <div className="Landing">
      <nav className="navbar">
        <p className="logo">PETRIZ</p>
        <div>
          <Link to="/login">
            <Button className="button" name="Login" />
          </Link>
          {/* <Hamburger /> */}
        </div>
      </nav>
      <main>
        {isSearch ? (
          <div className="main">
            <h1>Welcome to Petriz</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              nesciunt harum distinctio, quis quasi laudantium amet voluptas a
              ut? Pariatur, mollitia doloribus. A, omnis.
            </p>
            <div className="search-header">
              <div className="search-header__input" onClick={handleSearch}>
                Search
                <div className="search-header__button">
                  <svg
                    fill="none"
                    viewBox="0 0 18 18"
                    height="18"
                    width="18"
                    className="search-header__icon"
                  >
                    <path
                      fill="#3A3A3A"
                      d="M7.132 0C3.197 0 0 3.124 0 6.97c0 3.844 3.197 6.969 7.132 6.969 1.557 0 2.995-.49 4.169-1.32L16.82 18 18 16.847l-5.454-5.342a6.846 6.846 0 0 0 1.718-4.536C14.264 3.124 11.067 0 7.132 0zm0 .82c3.48 0 6.293 2.748 6.293 6.15 0 3.4-2.813 6.149-6.293 6.149S.839 10.37.839 6.969C.839 3.568 3.651.82 7.132.82z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="textarea">
            <h2>Which term do you in help in </h2>
            <Textarea />
          </div>
        )}
      </main>
    </div>
  );
}
