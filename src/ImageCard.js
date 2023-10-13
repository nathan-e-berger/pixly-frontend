function ImageCard({ image, filter }) {

  return <img src={image.s3_url} alt={image.title} />;
}

export default ImageCard;