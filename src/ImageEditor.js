import { useState } from "react";
import { useParams } from "react-router-dom";

function ImageEditor({ images }) {
  const { id } = useParams()

  const image = images.filter((image) => image.id === id)


  return (
    <ImageCard image={image} />
  );
}

export default ImageEditor;