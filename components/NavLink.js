"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function NavLink({ children, href, Icon }) {
  const path = usePathname();
  return (
    <div className="flex  items-center space-x-1 hover:text-amber-500 text-3xl m-2 sm:space-x-6 sm:m-3 relative">
      <Icon className="text-3xl text-black sm:hidden hover:text-amber-700" />
      <Link
        href={href}
        className={clsx(
          "text-amber-700",
          path === href &&
            "before:content-[''] transition-all before:block before:absolute before:-bottom-4 before:left-0 sm:before:left-7 before:w-1/2 before:h-2 before:bg-gradient-to-r before:from-amber-600 before:to-amber-400 before:rounded-sm before:animate-enlarge"
        )}
      >
        {children}
      </Link>
    </div>
  );
}
