export async function searchMovies(searchTerm) {
  const base_url = "https://api.themoviedb.org/3/";
  const API_KEY = process.env.API_KEY; // For query parameter authentication
  const token = process.env.ACCESS_TOKEN; // For Bearer authentication

  const endpoint = `search/movie?api_key=${API_KEY}&query=${searchTerm}`;

  try {
    // Fetch data from the API
    const response = await fetch(`${base_url}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { error: error.message }; // Optional: Return an error object for further handling
  }
}
