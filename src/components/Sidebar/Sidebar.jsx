import AvailableQuery from "./AvailableQuery";
import History from "./History";

function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full basis-[22%] px-2 py-3 text-center">
        <div className="rounded-lg bg-lightColor-100 p-3 font-bold text-white text-xl flex items-center justify-center gap-2 dark:bg-darkColor-300">
          <span className="material-symbols-outlined">database</span>
          SQLEditor
        </div>
        <div className="flex flex-col overflow-auto flex-1">
          <AvailableQuery />
          <History />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
