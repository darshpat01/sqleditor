import AvailableQuery from "./AvailableQuery";
import History from "./History";
import { FaDatabase } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full basis-[22%] px-2 py-3 text-center">
        <div className="rounded-lg bg-lightColor-100 p-3 font-bold text-white text-xl flex items-center justify-center gap-2">
          <FaDatabase />
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
