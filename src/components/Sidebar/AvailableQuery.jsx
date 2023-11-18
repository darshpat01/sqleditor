import Query from "../ui/Query";
function AvailableQuery() {
  return (
    <>
      <div className="rounded-lg p-4 bg-lightColor-300 mt-4 dark:bg-darkColor-300 flex-1">
        <div className="font-bold text-xl dark:text-white">
          Available Queries
        </div>
        <div className="h-full overflow-y-auto">
          <Query q="SELECT * FROM table1;" />
          <Query q="SELECT * FROM table2;" />
        </div>
      </div>
    </>
  );
}

export default AvailableQuery;
