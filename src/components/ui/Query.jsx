import { MyContext } from "../../MyContext";
import { useContext } from "react";

function Query({ q }) {
  const { setQuery } = useContext(MyContext);
  return (
    <div
      className="rounded-lg cursor-pointer p-4 font-semibold bg-white text-lightColor-100 my-2 hover:bg-slate-100 dark:text-darkColor-100"
      onClick={() => setQuery(q)}
    >
      <code>{q}</code>
    </div>
  );
}

export default Query;
