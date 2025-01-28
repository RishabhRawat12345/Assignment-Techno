import React, { useState } from "react";
import Navbar from "./Components/Nav";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
  );
};

export default App;
