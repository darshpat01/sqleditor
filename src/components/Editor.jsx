import ReactCodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { MyContext } from "../MyContext";
import { useContext } from "react";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";

function Editor() {
  const { query, setQuery, isDarkMode } = useContext(MyContext);

  return (
    <>
      <ReactCodeMirror
        className="text-lg h-full"
        height="100%"
        value={query}
        extensions={[sql()]}
        onChange={(value) => {
          setQuery(value);
        }}
        theme={isDarkMode ? xcodeDark : xcodeLight}
      />
    </>
  );
}

export default Editor;
