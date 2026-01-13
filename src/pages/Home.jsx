import { useState } from "react";
import Header from "./../components/Header";
import Search from "./../components/Search";
import TrendingMovies from "./../components/TrendingMovies";
import Movies from "./../components/Movies";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10)
  );

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Update URL when search term or page changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearchTerm) {
      params.set("q", debouncedSearchTerm);
    }
    if (currentPage > 1) {
      params.set("page", currentPage.toString());
    }
    setSearchParams(params, { replace: true });
  }, [debouncedSearchTerm, currentPage, setSearchParams]);

  // Reset page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TrendingMovies />
        <Movies searchTerm={searchTerm} />
      </div>
    </main>
  );
}
