import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routing/Layout/Layout";

// import Genre from "./Genre";
// import NotFound from "./NotFound";

function App() {
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
