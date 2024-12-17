import { getById } from "@/lib/getByIndex";
import Image from "next/image";

export default async function FullImage({ params }) {
  const { movieId } = await params;
  const response = await getById(movieId);
  console.log(response);

  return (
    <div className="relative p-4 bg-gray-800 rounded-lg group w-full md:w-1/2 h-96 mx-auto mt-20">
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
  );
}
