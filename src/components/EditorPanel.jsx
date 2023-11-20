import { MyContext } from "../MyContext";
import { useContext } from "react";
import { data1, data2, data3 } from "../assets/data";
import { IoSunny, IoMoon } from "react-icons/io5";
import { AiFillCaretRight } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

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
        className="flex items-center justify-center rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
        onClick={runHandler}
      >
        <AiFillCaretRight size={25} />
        Run
      </button>
      <button
        className="flex items-center justify-center rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
        onClick={clearHandler}
      >
        <MdOutlineClear size={25} />
        Clear
      </button>
      <button
        onClick={() => toggleDarkMode()}
        className="flex justify-center items-center rounded-lg p-2 bg-lightColor-100  text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
      >
        {isDarkMode ? (
          <IoSunny className=" cursor-pointer" size={25} />
        ) : (
          <IoMoon className=" cursor-pointer" size={25} />
        )}
      </button>
    </div>
  );
}

export default EditorPanel;
