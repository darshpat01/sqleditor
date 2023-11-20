import { atom } from "jotai";

export const query_atom = atom("");
export const tableData_atom = atom([]);
export const history_atom = atom([]);
export const isDarkMode = atom(
  localStorage.getItem("isDarkMode") === "true" ? true : false
);
export const availableQueries_atom = atom([
  "SELECT * FROM users;",
  "SELECT * FROM flights;",
  "SELECT * FROM doctors;",
]);
