import Image from "./Image";

function ImageGrid({ data }) {
  console.log(data);
  if (data === undefined) {
    return <p>Server Error</p>;
  }
  if (data.length === 0) {
    return <p>No images available on this sol</p>;
  }

  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * data.length));
  }

  return (
    <div className="image-grid">
      <div className="details">
        <p>Rover: {data[0].rover.name}</p>
        <p>Launch date: {data[0].rover.launch_date}</p>
        <p>Landing date: {data[0].rover.landing_date}</p>
        <p>Max sol: {data[0].rover.max_sol}</p>
        <p>Max date: {data[0].rover.max_date}</p>
        <p>Sol: {data[0].sol}</p>
        <p>Earth date: {data[0].earth_date}</p>
      </div>
      <div className="images">
        {arr.map((i) => {
          return <Image photo={data[i]} />;
        })}
      </div>
    </div>
  );
}

export default ImageGrid;
