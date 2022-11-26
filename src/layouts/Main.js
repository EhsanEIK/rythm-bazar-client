import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Menubar from '../Pages/Shared/Menubar/Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='container mx-auto mt-10'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;