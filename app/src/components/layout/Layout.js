import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './layout.css';

import { AddClass } from '../../hook/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { SideBar } from '../sidebar/SideBar';

//Страницы для навигации
import { Calc } from '../../pages/calc/Calc';
import { Sample } from '../../pages/sample/Sample';
import { Info } from '../../pages/info/Info';

const Layout = () => {
    return(
        <>
            <Header/>
            <div className="content">
                <div className="routs">
                    <Switch>
                        <Route path = '/' exact component = {Home}/>
                        <Route path = '/calc' render = {()=> <Calc />} />
                        <Route path = '/sample' render = {()=> <Sample />} />
                        <Route path = '/info' render = {()=> <Info />} />
                    </Switch>
                </div>
                <SideBar/>
            </div>
        </>
    )
}

export default AddClass(Layout, 'layout')