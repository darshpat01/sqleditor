import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen w-screen">
        <Sidebar />
        <MainScreen />
      </div>
    </div>
  );
}

export default App;
