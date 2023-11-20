import ReactCodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { query_atom, isDarkMode } from "../atom";
import { useAtom } from "jotai";

function Editor() {
  const [query, setQuery] = useAtom(query_atom);
  const [isDM] = useAtom(isDarkMode);

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
        theme={isDM ? xcodeDark : xcodeLight}
      />
    </>
  );
}

export default Editor;
