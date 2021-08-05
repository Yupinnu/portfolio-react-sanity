import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-yellow-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink to="/" exact>
               Yupin Nu
          </NavLink>
          <NavLink to="/post">
               Blog Posts
          </NavLink>
          <NavLink to="/project">
               Projects
          </NavLink>
          <NavLink to="/about">
               About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
