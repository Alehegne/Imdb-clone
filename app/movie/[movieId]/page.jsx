import { getById } from "@/lib/getByIndex";
import { getMovies } from "@/lib/getMovies";
import Image from "next/image";
import Link from "next/link";

export default async function MovieDetails({ params }) {
  const { movieId } = await params;
  const response = await getById(movieId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
      <Link href={`/movie/${movieId}/image`}>
        <div className="relative p-4 bg-gray-800 rounded-lg group h-96">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              response.backdrop_path || response.poster_path
            }`}
            fill
            className="z-0 object-fill hover:backdrop-blur-lg group-hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-lg ring-2 ring-gray-200 ring-offset-2 ring-offset-gray-500"
            placeholder="blur"
            blurDataURL="/loading.svg"
            alt={`${response.title} movie's image is not found!`}
          />
        </div>
      </Link>
      <div>
        <h1 className="m-4 text-2xl md:text-3xl font-bold bg-gradient-to-tr from-amber-300 to-amber-600 text-transparent bg-clip-text">
          {response.original_title || response.title}
        </h1>
        <p className="p-4 ">
          <span className="text-xl"> Over View:</span>
          {` ${response.overview}`}
        </p>
        <p className="p-1">date released: {response.release_date}</p>
        <p className="p-1">rating:{response.vote_average}</p>
      </div>
    </div>
  );
}
