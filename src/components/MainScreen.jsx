import Editor from "./Editor";
import EditorPanel from "./EditorPanel";
import Table from "./Table";

function MainScreen() {
  return (
    <>
      <div className="flex flex-col h-full basis-[78%] p-2">
        <Editor />
        <EditorPanel />
        <Table />
      </div>
    </>
  );
}

export default MainScreen;
