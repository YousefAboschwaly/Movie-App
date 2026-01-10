import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

export default function Movies({ movies, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">{error?.message || error?.toString() || "An error occurred"}</p>;

  return <section className="all-movies ">
    <h2 className="mt-40">All Movies</h2>
    <ul>
      {movies.map((movie) => (
       <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  </section>;
}
