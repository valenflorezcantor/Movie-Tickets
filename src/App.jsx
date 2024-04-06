import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routing/Layout/Layout";
import SeatSelection from "./components/SeatSelection";
import Seating from "./pages/Seating";

// import Genre from "./Genre";
// import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} /> */}
        <Route path="SeatSelection" element={<SeatSelection/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <>
      <Seating />

      <div>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default App;
