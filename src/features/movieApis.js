import { updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_TOKEN;

if (!API_KEY) {
  throw new Error("VITE_API_TOKEN environment variable is not set");
}

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

/**
 * Fetch movies from TMDB API.
 * If a query is provided, it searches for movies by title.
 * Otherwise, it fetches popular movies sorted by popularity.
 *
 * @param {string} query - Optional search query for movies
 * @returns {Promise<Array>} List of movie objects
 * @throws {Error} If the API request fails
 */
async function getMovies(query = "") {
  try {
    const endpoint = query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    // Update search count in Appwrite if a query was made and results exist
    if (query && data.results.length > 0) {
      updateSearchCount(query, data.results[0]).catch((err) => {
        console.error("Failed to update search count:", err);
      });
    }
    if (!data.results || !Array.isArray(data.results)) {
      return [];
    }

    return data.results;
  } catch (err) {
    console.error("Error fetching movies:", err);
    throw err;
  }
}


/**
 * Fetch movie details by movie ID from TMDB
 *
 * @param {number} movieId - TMDB movie ID
 * @returns {Promise<Object>} Movie details
 */
async function getMovieDetails(movieId) {
  const endpoint = `${API_BASE_URL}/movie/${movieId}`;

  const response = await fetch(endpoint, API_OPTIONS);

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return await response.json();
}

export { getMovies, getMovieDetails };
