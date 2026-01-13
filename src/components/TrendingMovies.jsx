import { Link } from "react-router-dom";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Spinner from "./Spinner";

export default function TrendingMovies() {
  const { data: trendingMovies, isLoading, error } = useTrendingMovies();

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <p className="text-red-500">
        {error?.message || error?.toString() || "An error occurred"}
      </p>
    );
  return (
    <section className="trending">
      <h2>Trending Movies</h2>

      <ul>
        {trendingMovies?.map((movie, index) => (
          <Link to={`/movie/${movie.movie_id}`} key={movie.$id}>
            <li>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={movie.title} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
