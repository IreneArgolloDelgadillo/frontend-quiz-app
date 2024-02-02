import "./App.css";
import Header from "./components/Header/Header.js";
import { useTheme } from "./ThemeContext.js";

function App() {
  const { isDarkTheme, toggleTheme } = useTheme();
  console.log("is", isDarkTheme, toggleTheme);

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <p>This is a themed component</p>
      </div>
    </div>
  );
}

export default App;
