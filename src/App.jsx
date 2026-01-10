import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")

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
