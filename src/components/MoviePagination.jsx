export default function MoviePagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}) {
  // Limit display to max 500 pages (TMDB API limit)
  const maxPages = Math.min(totalPages, 50);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPages) {
      onPageChange((prev) => prev + 1);
    }
  };
  //
  if (maxPages <= 1) return null;

  return (
    <div className="flex items-center justify-between gap-1 sm:gap-2 mt-10">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1 || isLoading}
        className="pagination-btn "
        aria-label="Previous page"
      >
        <img src="/arrow-left-tiny.svg" alt="arrow-left" />
      </button>

      {/* Page Numbers */}
      <h4 className="font-bold text-xl text-white">
        {currentPage}
        <span className="text-gray-100 font-normal"> / {maxPages} </span>
      </h4>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === maxPages || isLoading}
        className="pagination-btn"
        aria-label="Next page"
      >
        <img src="/arrow-right-tiny.svg" alt="arrow-right" />
      </button>
    </div>
  );
}
