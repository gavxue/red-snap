function SearchBox({ sol, onClick }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by sol"
        id="sol"
        autoComplete="off"
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
}

export default SearchBox;
