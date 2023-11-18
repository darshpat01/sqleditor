import Editor from "./Editor";
import EditorPanel from "./EditorPanel";
import Table from "./Table";
import Split from "react-split";
// import Split from "@uiw/react-split";

function MainScreen() {
  return (
    <>
      <div className="flex flex-col h-screen basis-[78%] px-2">
        <EditorPanel />
        <Split className={"h-[calc(100vh-58px)]"} direction="vertical">
          <div className="overflow-auto h-1/2">
            <Editor />
          </div>
          <div className="overflow-auto h-1/2">
            <Table />
          </div>
        </Split>
      </div>
    </>
  );
}

export default MainScreen;
