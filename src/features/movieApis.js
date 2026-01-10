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

async function getAllMovies() {
  try {
    const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    if (!data.results || !Array.isArray(data.results)) return [];

    return data.results;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAllMovies };
