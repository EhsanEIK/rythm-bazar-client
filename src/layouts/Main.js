import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Pages/Shared/Menubar/Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='container mx-auto mt-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;