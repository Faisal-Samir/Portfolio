import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shares/Header/Header';
import Footer from '../pages/shares/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;