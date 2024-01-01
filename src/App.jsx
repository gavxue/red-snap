import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [data, setData] = useState([]);
  // const url =
  //   "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY";
  // const fetchInfo = () => {
  //   return fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  // console.log(data);

  const img = document.querySelector("img");
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=0InkMC1nDfn2Bt7aZm0ZNKH7rjoAUiMSg7YKwh1q",
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.latest_photos[1].img_src;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <img src="" alt="rover image" />
    </div>
  );
}

export default App;
