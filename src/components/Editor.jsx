import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { useState } from "react";
function Editor({ query }) {
  const [value, setValue] = useState("SELECT * FROM table1;");
  return (
    <>
      <CodeMirror
        value={value}
        extensions={[sql()]}
        className="text-left"
        height="400px"
      />
    </>
  );
}

export default Editor;
