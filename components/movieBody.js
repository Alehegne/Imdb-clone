import MovieCard from "./movieCard";

export default function MovieDetails({ moviesInfo }) {
  if (moviesInfo.results.length === 0) {
    return (
      <div className="text-center">
        <p className="text-2xl ">No movie, </p>
      </div>
    );
  }
  return (
    <main className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-8">
      {moviesInfo.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      ;
    </main>
  );
}
