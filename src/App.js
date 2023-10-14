import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import Api from './Api';
import { Container, Col } from 'reactstrap';

/** Function renders entire app and images on load
 * props: none
 * state: isLoading, images [{image}, {image}, ...]
 *
 * App ->  RoutesList, NavBar -> ImageForm, ImageEditor
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function initialFetch() {
      const imagesResponse = await Api.get();
      setImages(imagesResponse);
      setIsLoading(false);
    }
    initialFetch();
  }, [isLoading]);

  async function upload(formData) {
    const image = await Api.create(formData);
    const images = await Api.get();
    setImages(images);
    setIsLoading(false);
    return image;
  }

  if (isLoading) return <p>LOADING...</p>;

  return (
    <BrowserRouter>
      <NavBar />
      <Col md={6}>
        <RoutesList images={images} upload={upload} />
      </Col>
    </BrowserRouter>
  );
}

export default App;
