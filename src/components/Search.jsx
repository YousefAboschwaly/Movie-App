export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search Icon" />
        <input
          type="text"
          aria-label="Search movies"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />{" "}
      </div>
    </div>
  );
}
