import AvailableQuery from "./AvailableQuery";
import History from "./History";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full basis-[22%] px-2 py-3 text-center">
        <div className="rounded-lg bg-blue-600 p-4 font-bold text-white">
          SQLEditor
        </div>
        <div className="flex-1 flex flex-col">
          <AvailableQuery />
          <History />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
