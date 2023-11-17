import Query from "./ui/Query";
function Sidebar() {
  return (
    <>
      <div className="h-full basis-[22%] px-2 py-3 text-center">
        <div className="rounded-lg bg-blue-600 p-4 font-bold text-white">
          SQLEditor
        </div>
        <div className="rounded-lg p-4 bg-slate-200 mt-4">
          <div className="font-bold text-xl">Available Queries</div>
          <div className="h-96 overflow-y-auto">
            <Query q="SELECT * FROM table1;" />
            <Query q="SELECT * FROM table2;" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
