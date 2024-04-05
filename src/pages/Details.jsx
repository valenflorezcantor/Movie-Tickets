import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import Carousel from '../components/commons/Carousel';
import Details from '../components/Movie-details';
import Schedules from '../components/Schedules';

const Layout = () => {
    return (
        <>
            <Header />
            <Carousel />
            <Outlet />
            <div className="flex">
                <div className="w-1/2">
                    <Details />
                </div>
                <div className="w-1/2">
                    <Schedules />
                </div>
            </div>

        </>
    )
}

export default Layout;

