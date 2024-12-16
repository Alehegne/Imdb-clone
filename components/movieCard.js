import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa6";

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
            className="z-0 object-fill hover:backdrop-blur-lg group-hover:opacity-80 transition-opacity duration-300 ease-in-out"
            placeholder="blur"
            blurDataURL="/loading.svg"
            alt={`${movie.title} movie's image is not found!`}
          />
        </div>

        {/* absolute bottom-0 left-0 right-0 top-[200px] hover:top-[100px] */}
        <div className="px-4 mt-0">
          <div className="flex items-center gap-2 text-xl">
            <CiStar className="bg-yellow-500 bg-" />
            {movie.vote_average}
          </div>
          <h1 className="text-xl truncate font-bold">
            {movie.title || movie.name}
          </h1>
          <p className="flex p-0 items-center">
            {` ${movie.release_date || movie.first_air_date}`}
            <FaRegThumbsUp className="mx-1 pr-2 pl-2 text-3xl" />
            {movie.vote_count}
          </p>

          <p className="truncate p-0 text-[16px]">
            language : {`${movie.original_language}`}
          </p>
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
