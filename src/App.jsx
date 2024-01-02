import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  const [data, setData] = useState([]);
  const url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((photos) => {
        setData(photos.latest_photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Image data={data} />
    </div>
  );
}

export default App;
