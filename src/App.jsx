import { useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import Textarea from "./components/textarea/Textarea";

function App() {
  const [isSearch, setIsSearch] = useState(true);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <p className="logo">PETRIZ</p>
          <div>
            <Button className="button" name="Login" />
            {/* <Hamburger /> */}
          </div>
        </nav>
        <main>
          {isSearch ? (
            <div className="main">
              <h1>Welcome to Petriz</h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. S
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nesciunt harum distinctio, quis quasi laudantium amet voluptas a
                ut? Pariatur, mollitia doloribus. A, omnis.
              </p>
              <div class="search-header" onClick={handleSearch}>
                <div class="search-header__input">
                  Search
                  <div class="search-header__button">
                    <svg
                      fill="none"
                      viewBox="0 0 18 18"
                      height="18"
                      width="18"
                      class="search-header__icon"
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
    </div>
  );
}

export default App;
