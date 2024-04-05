import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/commons/Header";
import Carousel from "../../components/commons/Carousel";

const Layout = ({ movies = [] }) => {
  return (
    <>
      <Header />
      <Carousel movies={movies} />
      <Outlet />
    </>
  );
};

export default Layout;
