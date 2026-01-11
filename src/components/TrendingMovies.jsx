import useTrendingMovies from "../hooks/useTrendingMovies";
import Spinner from "./Spinner";

export default function TrendingMovies() {
  const { data:trendingMovies, isLoading, error } = useTrendingMovies();

    if (isLoading) return <div className="flex justify-center items-center"><Spinner /></div>;
  if (error) return <p className="text-red-500">{error?.message || error?.toString() || "An error occurred"}</p>;
  return (
    <section className="trending">
      <h2>Trending Movies</h2>

      <ul>
        {trendingMovies?.map((movie, index) => (
          <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.poster_url} alt={movie.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
