import { NavLink } from "react-router-dom";

/** Function renders NavBar
 *
 * App -> NavBar -- links to -> Homepage, ImageEditor, ImageForm
 */
function NavBar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ImageForm">Form</NavLink>
    </>
  );
}

export default NavBar;