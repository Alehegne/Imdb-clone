import { addEndPoint } from "./onlyEndPoin";

export async function getMovies(genre) {
  // Determine endpoint based on genre
  const endpoint =
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";

  const response = await addEndPoint(endpoint);

  return response;
}
