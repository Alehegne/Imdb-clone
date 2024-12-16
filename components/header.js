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
      <header className="">
        <nav className="flex justify-between items-center tex-lg sm:mb-4 mb-10">
          <div className="flex items-center space-x-4 ml-0">
            <NavLink
              href="/"
              className="hover:bg-gray-300 ml-0 pl-0"
              Icon={AiFillHome}
            >
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
    </>
  );
}
