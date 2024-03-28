import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routing/Layout/Layout";

import { useEffect,useState } from "react";
import { getAllMovies } from "./services/movieServices";




function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies().then((response)=>{
      console.log(response);
      setMovies(response);
    });
  }, []);
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
