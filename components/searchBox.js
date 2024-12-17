"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mx-14 gap-4"
    >
      <input
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="Search for a movie"
        className="my-6 px-4 py-2 rounded-md flex-1 bg-transparent border-none outline-none focus:ring-2 focus:ring-gray-800 peer"
      />
      <button
        disabled={!searchValue}
        type="submit"
        className={`bg-transparent px-4 py-2 rounded-md hover:bg-gray-400  disabled:cursor-not-allowed peer-focus:ring-1 ring-offset-2 ring-offset-gray-500 ring-gray-300`}
      >
        Search
      </button>
    </form>
  );
}
