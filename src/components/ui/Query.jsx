import { MyContext } from "../../MyContext";
import { useContext } from "react";

function Query({ q }) {
  const { setQuery } = useContext(MyContext);
  return (
    <div
      className="rounded-lg cursor-pointer p-4 font-semibold bg-white text-blue-500 my-2 hover:bg-slate-100"
      onClick={() => setQuery(q)}
    >
      <code>{q}</code>
    </div>
  );
}

export default Query;
