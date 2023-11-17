import { MyContext } from "../MyContext";
import { useContext, useEffect } from "react";
import { data1, data2 } from "../assets/data";

function EditorPanel() {
  const { query, setQuery, setTableData } = useContext(MyContext);

  const runHandler = () => {
    if (query === "SELECT * FROM table1;") {
      setTableData(data1);
    } else if (query === "SELECT * FROM table2;") {
      setTableData(data2);
    } else {
      setTableData([]);
      alert("Please select from the available queries.");
    }
  };
  return (
    <div className="flex justify-end px-4 py-2">
      <button
        className="rounded-lg p-2 bg-blue-500 text-white font-boldn min-w-[5em] hover:bg-blue-600"
        onClick={runHandler}
      >
        Run
      </button>
    </div>
  );
}

export default EditorPanel;
