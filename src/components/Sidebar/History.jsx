import Query from "../ui/Query";
import { MyContext } from "../../MyContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";

function History() {
  const { history, setHistory } = useContext(MyContext);
  return (
    <>
      <div className="flex  flex-col rounded-lg p-4 bg-lightColor-300 mt-4 dark:bg-darkColor-300 flex-1 overflow-auto ">
        <div className="grid grid-cols-3 items-center pb-2">
          <div></div>
          <div className="font-bold text-xl dark:text-white items-center">
            History
          </div>
          <button
            onClick={() => setHistory([])}
            className="justify-self-end dark:text-white p-1 rounded-full hover:bg-lightColor-200 dark:hover:bg-darkColor-100"
          >
            <MdDelete size={25} />
          </button>
        </div>

        <div className="overflow-auto flex-1">
          {history && history.map((q, i) => <Query key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default History;
