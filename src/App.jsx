import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import SearchBox from "./components/SearchBox";
import SelectionBox from "./components/SelectionBox";

function App() {
  const [data, setData] = useState([]);
  const [sol, setSol] = useState("");
  const [rover, setRover] = useState("perseverance");

  // initial fetch
  const url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData.latest_photos);
    };
    fetchData();
  }, [sol]);

  // sol change
  const handleChange = (e) => {
    setSol(e.target.value);
    const imageGrid = document.querySelector(".image-grid");
    imageGrid.style.display = "none";
  };

  // rover change
  const handleClickRover = (e) => {
    setRover(e.target.id);
    handleClick();
    // const btnPerseverance = document.getElementById("perseverance");
    // const btnCuriosity = document.getElementById("curiosity");
    // const btnOpportunity = document.getElementById("opportunity");
    // if (rover === "perseverance") {
    //   btnPerseverance.classList.add("highlight");
    //   btnCuriosity.classList.remove("highlight");
    //   btnOpportunity.classList.remove("highlight");
    // } else if (rover === "curiosity") {
    //   btnPerseverance.classList.remove("highlight");
    //   btnCuriosity.classList.add("highlight");
    //   btnOpportunity.classList.remove("highlight");
    // } else if (rover === "opportunity") {
    //   btnPerseverance.classList.remove("highlight");
    //   btnCuriosity.classList.remove("highlight");
    //   btnOpportunity.classList.add("highlight");
    // };
  };

  // submit
  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q&sol=${sol}`
      );
      const newData = await response.json();
      setData(newData.photos);
    } catch (err) {
      console.log(err.message);
    }
    const imageGrid = document.querySelector(".image-grid");
    imageGrid.style.display = "block";
  };

  return (
    <div>
      <Header />
      <SelectionBox onClick={handleClickRover} />
      <SearchBox sol={sol} onClick={handleClick} onChange={handleChange} />
      <ImageGrid data={data} />
    </div>
  );
}

export default App;
