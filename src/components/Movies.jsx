import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";
import Spinner from "./Spinner";

export default function Movies({
  searchTerm,
  currentPage,
  onPageChange,
}) {
  const { movies, totalPages, isFetching, error } = useMovies({
    query: searchTerm,
    page: currentPage,
  });

  if (isFetching) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500">
        {error?.message || "An error occurred"}
      </p>
    );
  }

  return (
    <section className="all-movies">
      <h2>Popular</h2>

      <ul>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>

      <MoviePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        isLoading={isFetching}
      />
    </section>
  );
}
