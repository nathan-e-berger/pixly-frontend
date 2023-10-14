import { NavLink } from "react-router-dom";
import { Button } from "reactstrap"
/** Function renders NavBar
 *
 * App -> NavBar -- links to -> Homepage, ImageEditor, ImageForm
 */
function NavBar() {
  return (
    <>
      <Button color="light" size="lg"><NavLink to="/">Home</NavLink></Button>
      <Button color="light" size="lg"><NavLink to="/ImageForm">Form</NavLink></Button>
    </>
  );
}

export default NavBar;