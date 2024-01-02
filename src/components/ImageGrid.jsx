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
    <div className="image-grid">
      {data.map((photo) => {
        return <Image photo={photo} />;
      })}
    </div>
  );
}

export default ImageGrid;
