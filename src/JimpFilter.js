import { useEffect, useState } from "react";
import 'jimp/browser/lib/jimp';
const { Jimp } = window;

/** Function renders image with jimp filter applied
 *
 * Logic is supplied by jimp at "https://github.com/jimp-dev/jimp"
 *
 * props: imageUrl, filter
 * state:
 * -jimpImage (pre encoded image)
 * -image (base64 encoded image)
 * -transformedImage (result after filter applied)
 *
 * App -> RoutesList -> ImageEditor -> JimpFilter  -> TransformedImage
 */
function JimpFilter({ imageUrl, filter }) {
  const [jimpImage, setJimpImage] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [transformedImage, setTransformedImage] = useState(undefined);

  // loading an image every time imageUrl changes
  useEffect(() => {
    const loadImage = async () => {

      // generating the Jimp data structure
      // loading an image from an URL
      const jimpImage = await Jimp.read(imageUrl);
      setJimpImage(jimpImage);

      // transforming jimpImage into its Base64 representation
      // and storing it
      const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
      setImage(image);
    };

    loadImage();
  }, [imageUrl, filter]);

  // generating the transformed image
  // as soon as the Jimp data structure is ready
  useEffect(() => {
    if (jimpImage) {
      const transformImage = async () => {
        switch (filter) {
          case "dither":
            await jimpImage.dither565();
            break;
          case "blur":
            await jimpImage.blur(5);
            break;
          case "threshold":
            await jimpImage.threshold({ max: 150 });
            break;
          case "color":
            await jimpImage.color([{ apply: "red", params: [100] }]);
            break;
          case "normalize":
            await jimpImage.normalize();
            break;
          default:
        }

        // storing the transformed image
        // in Base64 format
        const transformedImage = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
        setTransformedImage(transformedImage);
      };

      transformImage();
    }
  }, [jimpImage, filter]);

  function handleChange(evt) {

  }

  return image && jimpImage ? (
    <>
      <h1>Transformed Image</h1>
      <img
        className="transformedImage"
        src={transformedImage}
        alt="Transformed"
      />
    </>
  ) : (
    <>Loading...</>
  );
}

export default JimpFilter;
