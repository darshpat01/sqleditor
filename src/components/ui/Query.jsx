function Query({ query }) {
  return (
    <div className="rounded-lg cursor-pointer p-4 font-semibold bg-white text-blue-500 my-2 hover:bg-slate-100">
      <code>{query}</code>
    </div>
  );
}

export default Query;
