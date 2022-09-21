import { NavLink } from "react-router-dom";

function Navbar() {
    return (
      <div className="Nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gym">Gym</NavLink>
        <NavLink to="/coding">Coding</NavLink>
        <NavLink to="/dating">Dating</NavLink>
        <NavLink to="/fighting-games">Fighting Games</NavLink>
      </div>
    );
  }
  
  export default Navbar;