import MovieCard from "./movieCard";

export default function MovieDetails({ moviesInfo }) {
  if (moviesInfo.results.length === 0) {
    return <p>No movie details</p>;
  }
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-8">
      {moviesInfo.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      ;
    </main>
  );
}
