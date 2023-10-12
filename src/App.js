import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar"
/**
 *  BrowserRouter, NavBar, SearchBar, ImageForm, ImageEditor
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesList />
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
