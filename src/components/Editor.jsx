import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { MyContext } from "../MyContext";
import { useContext } from "react";
function Editor() {
  const { query, setQuery } = useContext(MyContext);
  console.log(query);

  return (
    <>
      <CodeMirror
        value={query}
        extensions={[sql()]}
        className="text-left"
        height="400px"
        onChange={(value) => {
          setQuery(value);
        }}
      />
    </>
  );
}

export default Editor;
