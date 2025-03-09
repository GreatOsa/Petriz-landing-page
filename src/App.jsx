import { useState, useEffect } from "react";
import "./App.css";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ErrorPage from "./Error-page";

function App() {
  // const router = createBrowserRouter([]);
  const [isSearch, setIsSearch] = useState(true);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  // Handle clicking outside textarea

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".textarea") && !isSearch) {
        setIsSearch(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearch]);
  return (
    <div className="App">
      <BrowserRouter basename="/Petriz-landing-page">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage isSearch={isSearch} handleSearch={handleSearch} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
