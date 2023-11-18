import QueryHistory from "../ui/QueryHistory";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

function History() {
  const { histroy, setHistory } = useContext(MyContext);
  return (
    <>
      <div className="rounded-lg p-4 bg-slate-200 mt-4 basis-1/2">
        <div className="font-bold text-xl">Histroy</div>
        <div className="h-full overflow-y-auto">
          {histroy && histroy.map((q, i) => <QueryHistory key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default History;
