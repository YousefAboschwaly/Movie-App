import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MoviePagination from "./MoviePagination";
import Spinner from "./Spinner";



export default function Movies({ searchTerm, currentPage, onPageChange }) {
  const { movies, totalPages, totalResults, isLoading, isFetching, error } = useMovies({
    query: searchTerm,
    page: currentPage,
  });

  if (isLoading) {
    return (
      <section className="all-movies mt-10">
        <h2 className="text-white text-xl font-bold">
          {searchTerm ? `Search Results for "${searchTerm}"` : "All Movies"}
        </h2>
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="all-movies mt-10">
        <h2 className="text-white text-xl font-bold">
          {searchTerm ? `Search Results for "${searchTerm}"` : "All Movies"}
        </h2>
        <p className="text-red-500 mt-4">
          {error instanceof Error ? error.message : "Failed to load movies"}
        </p>
      </section>
    );
  }

  return (
    <section className="all-movies mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-xl font-bold">
          {searchTerm ? `Search Results for "${searchTerm}"` : "All Movies"}
        </h2>
        {totalResults > 0 && (
          <span className="text-gray-100 text-sm">
            {totalResults.toLocaleString()} movies found
          </span>
        )}
      </div>

      {movies?.length === 0 ? (
        <p className="text-gray-100 text-center py-10">No movies found</p>
      ) : (
        <>
          <ul className={isFetching && !isLoading ? "opacity-60 transition-opacity" : ""}>
            {movies?.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>

          <MoviePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            isLoading={isFetching}
          />
        </>
      )}
    </section>
  );
}
