import Image from "./Image";

function ImageGrid({ data }) {
  //   console.log(data);
  if (data === undefined) {
    return <p>Server Error</p>;
  }
  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="details">
        <p>Rover: {data[0].rover.name}</p>
        <p>Sol: {data[0].sol}</p>
        <p>Earth date: {data[0].earth_date}</p>
      </div>
      <div className="image-grid">
        {data.map((photo) => {
          return <Image photo={photo} />;
        })}
      </div>
    </>
  );
}

export default ImageGrid;
