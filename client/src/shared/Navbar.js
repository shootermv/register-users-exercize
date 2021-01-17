import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Assignment</h1>

        <div className="navContent">
          <div className="navLinks">
            <NavLink exact to="/">Register</NavLink>
            <NavLink exact to="/users">Users</NavLink>
          </div>
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
