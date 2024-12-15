import Link from "next/link";

export default function NavLink({ children, href, Icon }) {
  return (
    <div className="flex  items-center space-x-1 hover:text-amber-500 text-3xl m-2 sm:space-x-6 sm:m-3">
      <Icon className="text-3xl text-black sm:hidden hover:text-amber-700" />
      <Link href={href} className="hidden sm:inline">
        {children}
      </Link>
    </div>
  );
}
