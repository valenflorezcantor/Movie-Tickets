import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routing/Layout/Layout";

import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movieServices";
import Card from "./components/Card";
import Home from "./pages/Home";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then((response) => {
      console.log(response);
      setMovies(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout movies={movies} />}>
          <Route index element={<Home movies={movies} />} />
          {/* <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
