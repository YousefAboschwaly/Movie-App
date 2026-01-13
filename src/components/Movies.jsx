import { useState } from "react";
import { useDebounce } from "react-use";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";
import Spinner from "./Spinner";

export default function Movies({ searchTerm }) {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { movies, currentPage, totalPages, isFetching, error } = useMovies({
    query: debouncedSearchTerm,
  });
  const [page, setPage] = useState(currentPage || 1);
  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    1000,
    [searchTerm]
  );


  if (isFetching)
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
      <h2 >Popular</h2>
      <ul>
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
      <MoviePagination
        page={page}
        onPageChange={setPage}
        currentPage={currentPage}
        totalPages={totalPages}
        isLoading={isFetching}
      />
    </section>
  );
}
