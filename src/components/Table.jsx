import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([1]);
  return (
    <>
      <div className="border border-black h-1/2">
        {data.length > 0 ? (
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                </tr>
                <tr>
                  <td>Value 1</td>
                  <td>Value 2</td>
                  <td>Value 3</td>
                </tr>
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
