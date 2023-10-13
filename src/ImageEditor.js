import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "./ImageCard";
import JimpFilter from "./JimpFilter";
// import Jimp from "jimp";
// import 'jimp/browser/lib/jimp';
// const { Jimp } = window;

function ImageEditor({ images }) {
  const { id } = useParams();
  const image = images.images.find((image) => image.id === id);
  const [filter, setFilter] = useState("blur");
  console.log("image@ImageEditor", image);
  console.log("imageUrl@ImageEditor", image.s3_url);

  function handleChange(evt) {
    setFilter(evt.target.value);
  }

  return (
    <>
      <h1>Filter</h1>
      <div onChange={handleChange}>
        <input
          type="radio"
          value="blur"
          name="filter"
          checked={filter === "blur"}
        />
        <span>Blur</span>
        <input
          type="radio"
          value="dither"
          name="filter"
          checked={filter === "dither"}
        />
        <span>Dither</span>
        <input
          type="radio"
          value="threshold"
          name="filter"
          checked={filter === "threshold"}
        />
        <span>Threshold</span>
        <input
          type="radio"
          value="color"
          name="filter"
          checked={filter === "color"}
        />
        <span>Color</span>
        <input
          type="radio"
          value="normalize"
          name="filter"
          checked={filter === "normalize"}
        />
        <span>Normalize</span>
      </div>
      <JimpFilter
        imageUrl={image.s3_url}
        filter={filter} />
    </>
  );

}

export default ImageEditor;

/* <JimpFilter
  imagePic={image.s3_url}
  filter={filter}; */