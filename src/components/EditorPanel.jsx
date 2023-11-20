import { data1, data2, data3 } from "../assets/data";
import { isDarkMode } from "../atom";
import { useAtom } from "jotai";
import {
  query_atom,
  availableQueries_atom,
  tableData_atom,
  history_atom,
} from "../atom";

function EditorPanel() {
  const [query, setQuery] = useAtom(query_atom);
  const [availableQueries] = useAtom(availableQueries_atom);
  const [, setTableData] = useAtom(tableData_atom);
  const [history, setHistory] = useAtom(history_atom);

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

  const [isDM, setisDM] = useAtom(isDarkMode);

  return (
    <div className="flex justify-end px-4 py-2 gap-2">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <button
        className="flex items-center justify-center rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
        onClick={runHandler}
      >
        <span className="material-symbols-outlined">play_arrow</span>
        Run
      </button>
      <button
        className="flex items-center justify-center rounded-lg p-2 bg-lightColor-100 text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
        onClick={clearHandler}
      >
        <span className="material-symbols-outlined">close</span>
        Clear
      </button>
      <button
        onClick={() => {
          setisDM(!isDM);
          localStorage.setItem("isDarkMode", !isDM);
        }}
        className="flex justify-center items-center rounded-lg p-2 bg-lightColor-100  text-white font-boldn min-w-[5.5em] hover:bg-lightColor-50"
      >
        {isDM ? (
          <span className="material-symbols-outlined">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined">light_mode</span>
        )}
      </button>
    </div>
  );
}

export default EditorPanel;
