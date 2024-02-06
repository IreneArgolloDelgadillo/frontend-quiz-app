import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";

import React from "react";
import { useTheme } from "./ThemeContext.js";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();
  console.log("is", isDarkTheme, toggleTheme);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
