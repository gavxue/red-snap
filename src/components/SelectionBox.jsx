function SelectionBox({ onClick }) {
  return (
    <div className="selection-box">
      <button id="perseverance" onClick={onClick}>
        Perseverance
      </button>
      <button id="curiosity" onClick={onClick}>
        Curiosity
      </button>
      <button id="opportunity" onClick={onClick}>
        Opportunity
      </button>
    </div>
  );
}

export default SelectionBox;
