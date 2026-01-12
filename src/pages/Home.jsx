import { useState } from "react";
import Header from './../components/Header';
import Search from './../components/Search';
import TrendingMovies from './../components/TrendingMovies';
import Movies from './../components/Movies';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

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
