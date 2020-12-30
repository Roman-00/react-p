import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './header.css';

export const Header = () => {
    return(
        <div className="header">
            <div className="header__wrap">

                <div className="logo">
                    <a href="/">
                        <h2>RateApp</h2>
                    </a>
                </div>

                <NavBar/>

                <div className="person">
                    <i className="fa fa-user" area-hidden="true" />
                </div>
            </div>
            <hr/>
        </div>
    )
}