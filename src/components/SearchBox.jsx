function SearchBox({ sol, onClick, onChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by sol"
        id="sol"
        value={sol}
        onChange={onChange}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default SearchBox;
