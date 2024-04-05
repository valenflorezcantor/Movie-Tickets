import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routing/Layout/Layout";

import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movieServices";
import Card from './components/Card';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then((response) => {
      // console.log(response);
      setMovies(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout movies={movies} />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route exact path="./Card" component={Card} /> {'components\Card'}
          {/* <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = ({ movies = [] }) => {
  useEffect(() => {
    console.log("Vemos movies desde el componente Home", movies);
  }, [movies]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
