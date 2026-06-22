function SearchBar({ search, setSearch }) {
    return (
        <input 
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
            />
    );
}

export default SearchBar;