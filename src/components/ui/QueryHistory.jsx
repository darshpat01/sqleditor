function Query({ q }) {
  return (
    <div className="rounded-lg cursor-pointer p-4 font-semibold bg-white text-blue-500 my-2">
      <code>{q}</code>
    </div>
  );
}

export default Query;
