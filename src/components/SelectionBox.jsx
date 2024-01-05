function SelectionBox({ onClick, rover }) {
  return (
    <div className="selection-box">
      <button
        id="perseverance"
        onClick={onClick}
        style={{
          backgroundColor: rover === "perseverance" ? "#c84d06" : "#d46b08",
        }}
      >
        Perseverance
      </button>
      <button
        id="curiosity"
        onClick={onClick}
        style={{
          backgroundColor: rover === "curiosity" ? "#c84d06" : "#d46b08",
        }}
      >
        Curiosity
      </button>
      <button
        id="opportunity"
        onClick={onClick}
        style={{
          backgroundColor: rover === "opportunity" ? "#c84d06" : "#d46b08",
        }}
      >
        Opportunity
      </button>
    </div>
  );
}

export default SelectionBox;
