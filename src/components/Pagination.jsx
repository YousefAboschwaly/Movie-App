import { ChevronLeft, ChevronRight } from "lucide-react";


export default function MoviePagination({
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
}) {
  // Limit display to max 500 pages (TMDB API limit)
  const maxPages = Math.min(totalPages, 500);

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show

    if (maxPages <= showPages + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(maxPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < maxPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(maxPages);
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (maxPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-10">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1 || isLoading}
        className="pagination-btn pagination-nav"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              disabled={isLoading}
              className={`pagination-btn ${
                currentPage === page ? "pagination-active" : ""
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === maxPages || isLoading}
        className="pagination-btn pagination-nav"
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
