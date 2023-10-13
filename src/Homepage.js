import ImageCard from "./ImageCard";

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