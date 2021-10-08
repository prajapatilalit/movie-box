import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_container">
      <ul>
        <Link to="/">
          <li>Movies</li>
        </Link>
        <Link to="/addMovie">
          <li>Add Movie</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
