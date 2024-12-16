import MovieDetails from "@/components/movieBody";
import { getMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const { genre } = await searchParams;

  const moviesInfo = await getMovies(genre);

  return <MovieDetails moviesInfo={moviesInfo} />;
}
