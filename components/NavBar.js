import React from "react";
import NavLink from "./NavLink";
import NavHeader from "./NavHeader";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center w-full mx:0 dark:bg-gray-500 ring-gray-400 ring-1 ring-opacity-30 bg-gray-100 py-4 space-x-12">
      <NavHeader params="?genre=fetchTrending">Trending</NavHeader>
      <NavHeader params="?genre=fetchTopRated">Top Rated</NavHeader>
    </div>
  );
}
