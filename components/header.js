"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { AiFillHome } from "react-icons/ai";
import SearchBox from "./searchBox";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsTicketPerforatedFill } from "react-icons/bs";
import ThemeSwitch from "./toggleTheme";

export default function Header() {
  return (
    <>
      <header className="sm:mx-14 sm:py-4 sm:px-3 mx-1 px-1 py-4  ">
        <nav className="flex justify-between items-center tex-lg sm:mb-4 mb-10">
          <div className="flex items-center space-x-4">
            <NavLink href="/" className="hover:bg-gray-300" Icon={AiFillHome}>
              Home
            </NavLink>
            <NavLink
              href="/about"
              className="hover:bg-gray-400"
              Icon={FaCircleInfo}
            >
              About
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeSwitch />
            <Link href="/">
              <span className="font-bold text-2xl bg-amber-600 rounded-lg p-1 m-1 hover:bg-gradient-to-amber-400 from-amber-600 hover:bg-clip-text hover:text-transparent hover:bg-amber-950">
                IMDB
              </span>
              <span className="text-xl pl-xl ">clone</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex items-center justify-center w-full mx:0 dark:bg-gray-600 bg-gray-100 py-4 space-x-12">
        <NavLink href="/trending" Icon={MdOutlineTrendingUp}>
          Trending
        </NavLink>
        <NavLink href="/top_rated" Icon={BsTicketPerforatedFill}>
          Top Rated
        </NavLink>
      </div>
      <SearchBox />
    </>
  );
}
