import { useState } from "react";
import { useDebounce } from "react-use";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

export default function Movies({ searchTerm }) {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    1000,
    [searchTerm]
  );

  const {
    data: movies,
    isLoading,
    error,
  } = useMovies({ query: debouncedSearchTerm });

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
    <section className="all-movies ">
      <h2 className="mt-40">All Movies</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </section>
  );
}
