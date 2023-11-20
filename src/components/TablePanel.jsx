// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function TablePanel({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
  resultsPerPage,
}) {
  return (
    <>
      <div className="grid grid-cols-3 items-center p-2 sticky top-0 bg-lightColor-300 dark:text-white dark:bg-darkColor-300 border border-black">
        <div className="justify-self-start pl-4">
          Results Per Page : {resultsPerPage}
        </div>
        <div className="flex place-self-center items-center">
          {totalPages !== 1 && (
            <button
              className="mr-2 rounded-full p-1 hover:bg-lightColor-200 dark:hover:bg-darkColor-100 flex justify-center items-center cursor-pointer"
              onClick={handlePrevPage}
              disabled={totalPages === 1}
            >
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </button>
          )}
          <div>
            Page {currentPage} of {totalPages}
          </div>
          {totalPages !== 1 && (
            <button
              className="ml-2 rounded-full p-1 hover:bg-lightColor-200 dark:hover:bg-darkColor-100  flex justify-content-center items-center cursor-pointer"
              onClick={handleNextPage}
              disabled={totalPages === 1}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          )}
        </div>
        <div className="justify-self-end pr-4">Execution Time : 0.18 s</div>
      </div>
    </>
  );
}

export default TablePanel;
