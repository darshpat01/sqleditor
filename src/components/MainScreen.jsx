import Editor from "./Editor";
import Table from "./Table";

function MainScreen() {
  return (
    <>
      <div className="border border-l-sky-500 h-full basis-4/5 p-2">
        <Editor />
        <Table />
      </div>
    </>
  );
}

export default MainScreen;
