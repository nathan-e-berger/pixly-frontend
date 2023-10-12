import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/ImageEditor">Editor</NavLink>
      <NavLink to="/ImageForm">Form</NavLink>
    </>
  );
}

export default NavBar;