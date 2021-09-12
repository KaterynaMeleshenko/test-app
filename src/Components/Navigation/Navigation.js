import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/home" activeClassName={"selected"}>
        HOME
      </NavLink>
      <NavLink to="/allposts" activeClassName={"selected"}>
        ALL POSTS
      </NavLink>
      <NavLink to="/specificpost" activeClassName={"selected"}>
        SPECIFIC POST
      </NavLink>
      <NavLink to="/newpost" activeClassName={"selected"}>
        NEW POST
      </NavLink>
    </nav>
  );
}

export default Navigation;
