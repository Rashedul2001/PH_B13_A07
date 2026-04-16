import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            {/* for mobile edge */}
            <div className='container mx-auto p-4'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;