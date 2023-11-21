import Editor from "./Editor";
import EditorPanel from "./EditorPanel";
import Table from "./Table";
import Split from "react-split";
import TablePanel from "./TablePanel";
import { useState, useEffect } from "react";
import { tableData_atom } from "../atom";
import { useAtom } from "jotai";

function MainScreen() {
  const [tableData] = useAtom(tableData_atom);
  const [resultsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = tableData
    ? Math.ceil(tableData.length / resultsPerPage)
    : 0;
  const currentResults = tableData
    ? tableData.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
      )
    : null;
  useEffect(() => {
    setCurrentPage(1);
  }, [tableData]);

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen basis-[78%] px-2">
        <EditorPanel />
        <Split className={"h-[calc(100vh-74px)]"} direction="vertical">
          <div className="overflow-auto h-1/2">
            <Editor />
          </div>
          <div className="flex flex-col h-1/2">
            {tableData.length > 0 && (
              <div className="sticky top-0">
                <TablePanel
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  resultsPerPage={resultsPerPage}
                />
              </div>
            )}
            <Table currentResults={currentResults} />
          </div>
        </Split>
      </div>
    </>
  );
}

export default MainScreen;
