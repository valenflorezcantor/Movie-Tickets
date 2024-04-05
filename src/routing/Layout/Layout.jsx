import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/commons/Header';
import Carousel from '../../components/commons/Carousel';
import Details from '../../pages/Details';

const Layout = () => {
  return (
      <>
          <Header />
          <Carousel />
          <Outlet/>
          <Details />

      </>
  )
}

export default Layout;