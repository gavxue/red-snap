import Image from "./Image";

function ImageGrid({ data }) {
  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * data.length));
  }

  return (
    <div className="image-grid">
      {arr.map((i) => {
        return <Image photo={data[i]} />;
      })}
    </div>
  );
}

export default ImageGrid;
