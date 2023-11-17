import Editor from "./Editor";
import EditorPanel from "./EditorPanel";
import Table from "./Table";
import Split from "react-split";
import { useState } from "react";

function MainScreen() {
  return (
    <>
      <div className=" h-full basis-[78%] p-2">
        <div>
          <EditorPanel />
        </div>
        <Split
          className={"h-[calc(100vh-100px)]"}
          direction="vertical"
          minSize={0}
          snapOffset={30}
          sizes={[50, 50]}
        >
          <div className="overflow-auto">
            <Editor />
          </div>
          <div className="overflow-auto relative">
            <Table />
          </div>
        </Split>
      </div>
    </>
  );
}

export default MainScreen;
