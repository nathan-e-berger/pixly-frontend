import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar"
import { useEffect, useState } from 'react';

/**
 *  BrowserRouter, NavBar, SearchBar, ImageForm, ImageEditor
 */
function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ images, setImages ] = useState(null);

  useEffect(() => {
    async function initialFetch() {
      const response = await Api.get();
      const data = await response.json();
      setImages(data);
      setIsLoading(false)
    }
    initialFetch()
  }, [])


  async function upload(formData) {
    const image = await Api.create(formData)
  }

  if (!isLoading) return <p>LOADING...</p>

  return (
    <>
      <BrowserRouter>
        <RoutesList images={images} />
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
