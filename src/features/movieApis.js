const API_BASE_URL = "https://api.themoviedb.org/3";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer YOUR_API_READ_ACCESS_TOKEN`,
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
    if(!data.Response === false) return[]
    return data.results;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAllMovies };
