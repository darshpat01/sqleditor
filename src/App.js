import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([]);
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" ? true : false
  );
  const [availableQueries, setAvailableQueries] = useState([
    "SELECT * FROM users;",
    "SELECT * FROM flights;",
    "SELECT * FROM doctors;",
  ]);

  const toggleDarkMode = () => {
    localStorage.setItem("isDarkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App h-screen ${isDarkMode && "dark"}`}>
      <MyContext.Provider
        value={{
          query,
          setQuery,
          tableData,
          setTableData,
          history,
          setHistory,
          isDarkMode,
          toggleDarkMode,
          availableQueries,
        }}
      >
        <div className="flex h-full bg-lightColor-400 dark:bg-darkColor-400">
          <Sidebar />
          <MainScreen />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
