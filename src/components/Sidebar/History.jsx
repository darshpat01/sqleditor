import QueryHistory from "../ui/QueryHistory";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

function History() {
  const { histroy, setHistory } = useContext(MyContext);
  return (
    <>
      <div className="rounded-lg p-4 bg-lightColor-300 mt-4 basis-1/2 dark:bg-darkColor-300">
        <div className="font-bold text-xl dark:text-white">History</div>
        <div className="h-full overflow-y-auto">
          {histroy && histroy.map((q, i) => <QueryHistory key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default History;
