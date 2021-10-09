import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div>
        <i className="fas fa-video 5x"></i>
      </div>
      <div>
        <ul>
          <Link to="/">
            <li>Movies</li>
          </Link>
          <Link to="/addMovie">
            <li>Add Movie</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
