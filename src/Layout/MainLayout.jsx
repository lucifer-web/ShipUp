import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/NavigateBar'
import Footer from '../Component/Footer/Index' 
export default function MainLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
}