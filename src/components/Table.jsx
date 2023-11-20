import React from "react";

function Table({ currentResults }) {
  return (
    <>
      {currentResults.length > 0 ? (
        <div className="flex justify-center w-full h-full overflow-auto">
          <table className="table-auto h-full w-full dark:bg-white overflow-auto">
            <thead>
              <tr className="bg-lightColor-100 text-white">
                {Object.keys(currentResults[0]).map((key, i) => (
                  <th key={i} className="border border-black px-4 py-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentResults.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((value, j) => (
                    <td key={j} className="border border-black px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full bg-lightColor-300 dark:bg-darkColor-300">
          <div className="flex items-center justify-center dark:text-white">
            Run a query to see result
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
