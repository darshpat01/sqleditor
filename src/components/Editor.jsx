import ReactCodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { MyContext } from "../MyContext";
import { useContext } from "react";
function Editor() {
  const { query, setQuery } = useContext(MyContext);

  return (
    <>
      <ReactCodeMirror
        className="text-lg"
        height="100%"
        value={query}
        extensions={[sql()]}
        onChange={(value) => {
          setQuery(value);
        }}
      />
    </>
  );
}

export default Editor;
