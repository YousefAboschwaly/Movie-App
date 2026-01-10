import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import useMovies from "./hooks/useMovies";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const {data , isLoading , error} = useMovies()
  console.log(data , error , isLoading);

  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper">
        <Header />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
    </main>
  );
}
