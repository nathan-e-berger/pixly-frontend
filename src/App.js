import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
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
