import Query from "../ui/Query";
import { history_atom } from "../../atom";
import { useAtom } from "jotai";
// import React, { lazy, Suspense } from "react";

// const MdDelete = lazy(() =>
//   import("react-icons/md").then((module) => ({ default: module.MdDelete }))
// );

function History() {
  const [history, setHistory] = useAtom(history_atom);
  return (
    <>
      <div className="flex flex-col rounded-lg p-4 bg-lightColor-300 mt-4 dark:bg-darkColor-300 flex-1 overflow-auto ">
        <div className="grid grid-cols-3 items-center pb-2">
          <div></div>
          <div className="font-bold text-xl dark:text-white items-center">
            History
          </div>

          <button
            onClick={() => setHistory([])}
            className="flex items-center py-1 justify-self-end dark:text-white px-1 rounded-full hover:bg-lightColor-200 dark:hover:bg-darkColor-100"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>

        <div className="overflow-auto flex-1">
          {history && history.map((q, i) => <Query key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default History;
