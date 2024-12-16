"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-3xl font-bold mt-7">
      <h1>Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="bg-sky-500 p-4 m-4 hover:bg-sky-600 rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
