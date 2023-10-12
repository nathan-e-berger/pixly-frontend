function Homepage({ images }) {
    return (
        <>
            {images.map(image => (
                <ImageCard key={image.id} image={image} />
            )
            )}
        </>
    )
}

export default Homepage;