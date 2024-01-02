function Image({ photo }) {
  if (photo === undefined) {
    return <p>Server Error</p>;
  }
  //   if (photo.length === 0) {
  //     return <p>Loading...</p>;
  //   }
  //   console.log(data);
  //   const photo = data[335];

  return (
    <div className="image">
      <img src={photo.img_src} alt="" />
      <p>Rover: {photo.rover.name}</p>
      <p>Camera: {photo.camera.full_name}</p>
      <p>Sol: {photo.sol}</p>
      <p>Earth date: {photo.earth_date}</p>
    </div>
  );
}

export default Image;
