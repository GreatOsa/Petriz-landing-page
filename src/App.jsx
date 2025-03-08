import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/button/button";
import Textarea from "./components/textarea/Textarea";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/Login/LandingPage";

function App() {
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
      <LandingPage isSearch={isSearch} handleSearch={handleSearch} />
    </div>
    // <Login />
  );
}

export default App;
