import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">List Posts</Link>
      </li>
      <li>
        <Link to="/create-post">Create Posts</Link>
      </li>
    </ul>
  );
};

export default Navbar;
