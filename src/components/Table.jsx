import React, { useState } from "react";
import { MyContext } from "../MyContext";
import { useContext } from "react";

function Table() {
  const { tableData } = useContext(MyContext);
  console.log(1);
  return (
    <>
      <div className="border border-black h-1/2 w-full">
        {tableData.length > 0 ? (
          <div>
            <table className="table-auto w-full">
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
          <div>No data</div>
        )}
      </div>
    </>
  );
}

export default Table;
