import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/commons/Header';
import Carousel from '../../components/commons/Carousel';

const Layout = () => {
  return (
      <>
          <Header />
          <Carousel />
          <Outlet/>
      </>
  )
}

export default Layout;