function Image({ data }) {
  if (data === undefined) {
    return <p>Server Error</p>;
  }
  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={data[0].img_src} alt="" />
      {/* {data &&
        data.map((photo, i) => {
          console.log(photo);
          //   <img src={photo.img_src} alt={i} />;
        })} */}
    </div>
  );
}

export default Image;
