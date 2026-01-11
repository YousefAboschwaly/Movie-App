import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import useMovies from "./hooks/useMovies";
import Movies from "./components/Movies";
import { useDebounce } from "react-use";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

  useDebounce(()=>{setDebouncedSearchTerm(searchTerm)}, 500, [searchTerm])

  const {data , isLoading , error} = useMovies({query: debouncedSearchTerm})
  console.log(data , error , isLoading);

  return (
    <main >
      <div className="pattern"/>
      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>


      <Movies movies={data || []} isLoading={isLoading} error={error}  />

      </div>
    </main>
  );
}
