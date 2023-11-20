function Query({ q }) {
  return (
    <div className="rounded-lg cursor-pointer p-4 font-semibold bg-white text-lightColor-100 dark:text-darkColor-100 my-2">
      <code>{q}</code>
    </div>
  );
}

export default Query;
