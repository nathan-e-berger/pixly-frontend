import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import Api from './Api';

/**
 *  BrowserRouter, NavBar, SearchBar, ImageForm, ImageEditor
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState(null);
  // console.log("imagesssss", images);

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
    setImages(images);
    setIsLoading(true);
    return image;
  }

  if (isLoading) return <p>LOADING...</p>;

  return (
    <>
      <BrowserRouter>
        <RoutesList images={images} upload={upload} />
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
