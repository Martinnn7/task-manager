function FilterSelect({ status, setStatus }) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border border-slate-300 rounded-lg px-4 py-2 text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer"
    >
      <option value="all">All Tasks</option>

      <option value="active">Active</option>

      <option value="completed">Completed</option>
    </select>
  );
}

export default FilterSelect;
