import React from "react";
import { MyContext } from "../MyContext";
import { useContext } from "react";

function Table() {
  const { tableData } = useContext(MyContext);

  return (
    <>
      {tableData.length > 0 ? (
        <div className="flex justify-center w-full h-full ">
          <table className="table-auto max-h-full w-full dark:bg-white">
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key) => (
                  <th className="border border-black px-4 py-2">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr>
                  {Object.values(row).map((value) => (
                    <td className="border border-black px-4 py-2">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full">
          <div className="flex items-center justify-center dark:text-white">
            No data
          </div>
        </div>
      )}
    </>
  );
}

export default Table;
