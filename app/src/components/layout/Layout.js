import React from 'react';
import './layout.css';

import { AddClass } from '../../hook/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { SideBar } from '../sidebar/SideBar';

const Layout = () => {
    return(
        <>
            <Header/>
            <div className="content">
                <div className="routs">
                    <Home/>
                </div>
                <SideBar/>
            </div>
        </>
    )
}

export default AddClass(Layout, 'layout')