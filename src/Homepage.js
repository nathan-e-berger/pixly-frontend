import ImageCard from "./ImageCard";


/** Function renders homepage with all images from s3 bucket
 * props: images [{image}, {image}, ...]
 *
 * App -> RoutesList -> Homepage -> ImageCard(s)
 */
function Homepage({ images }) {
    console.log("images@HOMEPAGE", images);
    return (
        <>
            {images.images.map(image => (
                <ImageCard key={image.id} image={image} />
            )
            )}
        </>
    );
}

export default Homepage;