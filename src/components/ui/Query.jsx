import { MyContext } from "../../MyContext";
import { useContext } from "react";

function Query({ q }) {
  const { setQuery } = useContext(MyContext);
  return (
    <button
      className="w-full rounded-lg p-4 font-semibold bg-white text-lightColor-100 mt-2 hover:bg-slate-100 dark:text-darkColor-100"
      onClick={() => setQuery(q)}
    >
      <code>{q}</code>
    </button>
  );
}

export default Query;
