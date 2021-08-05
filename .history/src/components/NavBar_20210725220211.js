import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-yellow-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-yellow-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
          >
            Yupin
          </NavLink>
          <NavLink to="/post" className="inflex-flex items-center py-3 px3 my-6 rounded text-yellow-200 hover:text-red-800 ">Blog Posts</NavLink>
          <NavLink to="/project" className="inflex-flex items-center py-3 px3 my-6 rounded text-yellow-200 hover:text-red-800 ">Projects</NavLink>
          <NavLink to="/about" className="inflex-flex items-center py-3 px3 my-6 rounded text-yellow-200 hover:text-red-800 ">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
}
