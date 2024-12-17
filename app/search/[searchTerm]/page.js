import MovieDetails from "@/components/movieBody";
import { searchMovies } from "@/lib/searchMovies";

export default async function Search({ params }) {
  const { searchTerm } = await params;
  const results = await searchMovies(searchTerm);

  return <MovieDetails moviesInfo={results} />;
}
