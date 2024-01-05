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
  for (let i = 0; i < 21; i++) {
    arr.push(Math.floor(Math.random() * data.length));
  }

  return (
    <div className="image-grid">
      <div className="details">
        <p>Rover: {data[0].rover.name}</p>
        <div className="row-details">
          <div>Launch date: {data[0].rover.launch_date}</div>
          <div>Landing date: {data[0].rover.landing_date}</div>
        </div>
        <div className="row-details">
          <div>Max sol: {data[0].rover.max_sol}</div>
          <div>Max date: {data[0].rover.max_date}</div>
        </div>
        <div className="row-details">
          <div>Sol: {data[0].sol}</div>
          <div>Earth date: {data[0].earth_date}</div>
        </div>
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
