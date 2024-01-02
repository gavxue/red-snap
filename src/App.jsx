import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import SearchBox from "./components/SearchBox";

function App() {
  const [data, setData] = useState([]);
  const [sol, setSol] = useState("");

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

  // fetch on input
  const handleChange = (e) => {
    setSol(e.target.value);
    const imageGrid = document.querySelector(".image-grid");
    imageGrid.style.display = "none";
  };

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q&sol=${sol}`
      );
      const newData = await response.json();
      setData(newData.photos);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Header />
      <SearchBox sol={sol} onClick={handleClick} onChange={handleChange} />
      <ImageGrid data={data} />
    </div>
  );
}

export default App;
