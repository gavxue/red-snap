function SearchBox({ sol, onClick }) {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search by sol" id="sol" />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default SearchBox;
