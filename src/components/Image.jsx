function Image({ photo }) {
  if (photo === undefined) {
    return <p>Server Error</p>;
  }

  return (
    <div className="image">
      <img src={photo.img_src} alt="" />
      <p>Camera: {photo.camera.full_name}</p>
      <p>Photo ID: {photo.id}</p>
    </div>
  );
}

export default Image;
