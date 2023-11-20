import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import { isDarkMode } from "./atom";
import { useAtom } from "jotai";

function App() {
  const [isDM] = useAtom(isDarkMode);

  return (
    <div className={`App h-screen ${isDM && "dark"}`}>
      <div className="flex h-full bg-lightColor-400 dark:bg-darkColor-400">
        <Sidebar />
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
