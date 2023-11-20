import Query from "../ui/Query";
import { MyContext } from "../../MyContext";
import { useContext } from "react";
function AvailableQuery() {
  const { availableQueries } = useContext(MyContext);
  return (
    <>
      <div className="flex flex-col overflow-auto rounded-lg p-4 bg-lightColor-300 mt-4 dark:bg-darkColor-300 flex-1">
        <div className="font-bold text-xl dark:text-white pb-2">
          Available Queries
        </div>
        <div className="h-full overflow-auto">
          {availableQueries &&
            availableQueries.map((q, i) => <Query key={i} q={q} />)}
        </div>
      </div>
    </>
  );
}

export default AvailableQuery;
