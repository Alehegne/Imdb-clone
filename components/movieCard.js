import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CiStar } from "react-icons/ci";

export default function MovieCard({ movie }) {
  return (
    <div
      key={movie.id}
      className="
      bg-gray-400  sm:shadow-lg 
       sm:hover:shadow-slate-400 w-full ring-2 
        ring-gray-300 ring-offset-4 ring-offset-gray-500
         h-72 relative object-cover overflow-hidden rounded-lg 
         cursor-pointer
         active:scale-[1.01] transition-all duration-300 ease-in-out group"
    >
      <Link href={`/movie/${movie.id}`}>
        <div className="w-full h-40 relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
            }`}
            fill
            alt={`${movie.title} movie`}
            className="z-0 object-fill hover:backdrop-blur-lg group-hover:opacity-80 transition-opacity duration-300 ease-in-out"
            placeholder="blur"
            blurDataURL="/loading.svg"
          />
        </div>

        {/* absolute bottom-0 left-0 right-0 top-[200px] hover:top-[100px] */}
        <div className="px-4 mt-0">
          <div className="flex items-center gap-2 text-2xl">
            <CiStar className="bg-yellow-500 bg-" />
            {movie.vote_average}
          </div>
          <h1 className="text-2xl">{movie.title}</h1>
          <p>released At:{` ${movie.release_date}`}</p>
          <p>language : {`${movie.original_language}`}</p>
        </div>
      </Link>
    </div>
  );
}

{
  /* <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Image
        width={500}
        height={750}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      /> */
}
