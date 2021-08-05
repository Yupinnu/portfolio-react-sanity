import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-yellow-600">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-4 px-8 mr-4 ml-8 text-yellow-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
          >
            Yupin
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-red-800 "
            activeClassName="text-yellow-100 bg-red-600"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-red-800 "
            activeClassName="text-yellow-100 bg-green-600"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-red-800 "
            activeClassName="text-yellow-100 bg-blue-600"
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
