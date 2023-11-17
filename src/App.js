import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";
import { MyContext } from "./MyContext";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [tableData, setTableData] = useState([]);

  return (
    <div className="App h-screen">
      <MyContext.Provider value={{ query, setQuery, tableData, setTableData }}>
        <div className="flex h-full">
          <Sidebar />
          <MainScreen />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
