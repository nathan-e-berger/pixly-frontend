
/** Function renders card with image
 * props: image {image}, filter (jimp filter)
 * state: none
 *
 * App -> RoutesList -> ImageEditor, Homepage -> ImageCard
 */
function ImageCard({ image, filter }) {

  return <img src={image.s3_url} alt={image.title} />;
}

export default ImageCard;