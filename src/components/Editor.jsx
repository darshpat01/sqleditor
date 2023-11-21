import ReactCodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { query_atom, isDarkMode } from "../atom";
import { useAtom } from "jotai";
import { debounce } from "../lib/debounce";

function Editor() {
  const [query, setQuery] = useAtom(query_atom);
  const [isDM] = useAtom(isDarkMode);
  const changeHandler = (value) => {
    setQuery(value);
  };
  const debouncedChangeHandler = debounce(changeHandler, 250);
  return (
    <>
      <ReactCodeMirror
        className="text-lg h-full"
        height="100%"
        value={query}
        extensions={[sql()]}
        onChange={debouncedChangeHandler}
        theme={isDM ? xcodeDark : xcodeLight}
      />
    </>
  );
}

export default Editor;
