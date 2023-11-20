import { MyContext } from "../MyContext";
import { useContext } from "react";
import { data1, data2, data3 } from "../assets/data";
import { IoSunny, IoMoon } from "react-icons/io5";

function EditorPanel() {
  const {
    query,
    setQuery,
    setTableData,
    isDarkMode,
    toggleDarkMode,
    history,
    setHistory,
    availableQueries,
  } = useContext(MyContext);

  const runHandler = () => {
    if (query === availableQueries[0]) {
      setHistory([...history, query]);
      setTableData(data1);
    } else if (query === availableQueries[1]) {
      setHistory([...history, query]);
      setTableData(data2);
    } else if (query === availableQueries[2]) {
      setHistory([...history, query]);
      setTableData(data3);
    } else {
      setTableData([]);
      alert("Please select from the available queries.");
    }
  };

  const clearHandler = () => {
    setQuery("");
    setTableData([]);
  };
  return (
    <div className="flex justify-end px-4 py-2 gap-2">
      <button
        className="rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5em] hover:bg-lightColor-50"
        onClick={runHandler}
      >
        Run
      </button>
      <button
        className="rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5em] hover:bg-lightColor-50"
        onClick={clearHandler}
      >
        Clear
      </button>
      <button
        onClick={() => toggleDarkMode()}
        className="flex justify-center items-center rounded-lg p-2 bg-lightColor-100  text-white font-boldn min-w-[5em] hover:bg-lightColor-50"
      >
        {isDarkMode ? (
          <IoSunny className="text-2xl cursor-pointer" />
        ) : (
          <IoMoon className="text-2xl cursor-pointer" />
        )}
      </button>
    </div>
  );
}

export default EditorPanel;
