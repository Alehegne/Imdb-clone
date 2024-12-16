"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavHeader({ children, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const param = params.split("=")[1];

  return (
    <div className="flex  items-center space-x-1 hover:text-amber-500 text-3xl m-2 sm:space-x-6 sm:m-3 group">
      <Link
        href={`/?genre=${param}`}
        className={`text-amber-700 relative ${
          genre &&
          genre === param &&
          "before:content-[''] transition-all before:block before:absolute before:-bottom-4 before:left-0 before:w-1/2 before:h-2 before:bg-gradient-to-r before:from-amber-600 before:to-amber-400 before:rounded-sm before:animate-enlarge"
        }`}
      >
        {children}
      </Link>
    </div>
  );
}
