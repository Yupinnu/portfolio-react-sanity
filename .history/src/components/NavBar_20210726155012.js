import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-yellow-600">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-8 mr-4 ml-8 text-yellow-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
          >
            Yupin
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-green-800 "
            activeClassName="text-yellow-100 bg-red-500"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-green-800 "
            activeClassName="text-yellow-100 bg-green-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px3 mr-6 rounded text-yellow-200 hover:text-green-800 "
            activeClassName="text-yellow-100 bg-blue-400"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px3 my-6">
          <SocialIcon
            url="https://github.com/Yupinnu"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCCE7WsYdWvk-5FtBM2HHyGQ"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/watch/NuReviewchannel"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
