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
  }, []);

  // rover change
  const handleClickRover = (e) => {
    setRover(e.target.id);
  };

  // submit
  const handleClick = (e) => {
    setSol(document.getElementById("sol").value);
  };

  // update data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q&sol=${sol}`
        );
        const newData = await response.json();
        setData(newData.photos);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, [sol, rover]);

  return (
    <div className="app">
      <Header />
      <SelectionBox onClick={handleClickRover} rover={rover} />
      <SearchBox sol={sol} onClick={handleClick} />
      <ImageGrid data={data} />
    </div>
  );
}

export default App;
