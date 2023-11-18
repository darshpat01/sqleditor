import QueryHistory from "../ui/QueryHistory";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

function History() {
  const { history, setHistory } = useContext(MyContext);
  return (
    <>
      <div className="flex flex-col rounded-lg p-4 bg-lightColor-300 mt-4 dark:bg-darkColor-300 flex-1 overflow-auto">
        <div className="font-bold text-xl dark:text-white mb-2">History</div>
        <div className="overflow-auto flex-1">
          {history && history.map((q, i) => <QueryHistory key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default History;
