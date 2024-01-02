function Image({ photo }) {
  if (photo === undefined) {
    return <p>Server Error</p>;
  }

  console.log(photo);

  return (
    <div className="image">
      <img src={photo.img_src} alt="" />
      <p>Rover: {photo.rover.name}</p>
      <p>Camera: {photo.camera.full_name}</p>
      <p>Sol: {photo.sol}</p>
      <p>Earth date: {photo.earth_date}</p>
      <p>Photo ID: {photo.id}</p>
    </div>
  );
}

export default Image;
